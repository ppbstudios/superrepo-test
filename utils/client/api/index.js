import axios from 'axios';
import qs from 'qs';
import { Product, Products } from '~/utils/client/model/product';
import { Cart } from '~/utils/client/model/cart';
import snakecaseKeys from 'snakecase-keys';
import { Order, Orders } from '~/utils/client/model/order';
import { Reviews } from '~/utils/client/model/review';
import { Coupons } from '~/utils/client/model/coupon';
import {Collections} from "~/utils/client/model/collection";

const isProduction = process.env.NODE_ENV === 'production';
const appKey = process.env.VUE_APP_APP_KEY;

function baseURL() {
  if (isProduction) {
    return process.env.VUE_APP_API_HOST || 'https://theppbs.com/api';
  } else {
    return process.env.VUE_APP_API_HOST_DEV || 'https://dev.theppbs.com/api';
    // return 'http://localhost';
  }
}

function toq(params) {
  return qs.stringify(params, {
    arrayFormat: 'brackets',
  });
}

const myAxios = axios.create({
  baseURL: baseURL(),
  // baseURL: 'http://localhost',
  // baseURL: 'https://dev.theppbs.com',
});

myAxios.defaults.withCredentials = true;

// Add a request interceptor
myAxios.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = null; // TODO client only

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    config.headers = {
      ...config.headers,
      'x-ppb-app-key': appKey,
    };

    return config;
  },
  function (error) {
    // Do something with request error

    // if (isProduction) {
    //   const token = store.get('app/token');
    //   const currentUser = store.get('app/currentUser');
    //   const apiInfo = `${error.config.method.toUpperCase()} : ${
    //     error.config.url
    //   }`;
    //
    //   appsignal.sendError(error, span => {
    //     span.setTags({
    //       api: apiInfo,
    //       token: token,
    //       userId: currentUser.id,
    //     });
    //   });
    // }

    return Promise.reject(error);
  }
);

const api = {
  foo: () => {
    console.log('foo');
  },
  meta: () => {
    return myAxios.get('/v1/meta');
  },
  products: {
    listChuulens: (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['chuu-web'];
      return myAxios.get(`/v1/ppb/products?${toq(params)}`).then(({ data }) => {
        return data;
      });
    },
    listHapakr: (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['hapakristinkr'];
      return myAxios.get(`/v1/ppb/products?${toq(params)}`).then(({ data }) => {
        return data;
      });
    },
    byId: async (id) => {
      try {
        const { data } = await myAxios.get(`/v1/ppb/products/${id}`);
        return new Product(data);
      } catch (e) {
        return e;
      }
    },
    byHandle: async (store_id, handle) => {
      try {
        const { data } = await myAxios.get(
          `/v1/ppb/products?q[store_id_eq]=${store_id}&q[handle_eq]=${handle}`
        );
        if (data.total === 1) {
          // 1 이 아니면 뭔가 잘못된것임
          return new Product(data.records[0]);
        } else {
          return null;
        }
      } catch (e) {
        return e;
      }
    },
  },
  collections: {
    listHapakr: (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['hapakristinkr'];
      return myAxios
        .get(`/v1/ppb/collections?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
    listChuulens: (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['chuu-web'];
      return myAxios
        .get(`/v1/ppb/collections?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
    byId: async (id) => {
      try {
        const { data } = await myAxios.get(`/v1/ppb/collections/${id}`);
        return data;
      } catch (e) {
        return e;
      }
    },
    byHandle: async (store_id, handle) => {
      try {
        const { data } = await myAxios.get(
          `/v1/ppb/collections?q[store_id_eq]=${store_id}&q[handle_eq]=${handle}`
        );
        if (data.total === 1) {
          // 1 이 아니면 뭔가 잘못된것임
          return new Collection(data.records[0]);
        } else {
          return null;
        }
      } catch (e) {
        return e;
      }
    },
  },
  reviews: {
    list: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios.get(`/v1/ppb/reviews?${toq(params)}`);
    },
    productReviewList: async (handles = [], q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['handle_in'] = handles;
      return myAxios.get(`/v1/ppb/reviews?${toq(params)}`).then(({ data }) => {
        return data;
      });
    },
  },
  cart: {
    init: async (currency) => {
      if (!currency) {
        return Promise.reject('currency is required');
      }

      try {
        const { data } = await myAxios.get(`/v1/ppb/cart?currency=${currency}`);
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    getCart: async (cartToken) => {
      try {
        const { data } = await myAxios.get(`/v1/ppb/cart/${cartToken}`);
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    addItem: async (
      cartToken,
      ppbProductId,
      variantId,
      count = 1,
      packCount = 1
    ) => {
      const params = {
        ppbProductId,
        variantId,
        count,
        packCount,
      };
      try {
        const { data } = await myAxios.post(
          `/v1/ppb/cart/${cartToken}/items`,
          snakecaseKeys(params)
        );
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    modifyItem: async (
      cartToken,
      ppbProductId,
      variantId,
      count,
      cartItemId
    ) => {
      const params = {
        ppbProductId,
        variantId,
        count,
      };
      try {
        const { data } = await myAxios.put(
          `/v1/ppb/cart/${cartToken}/items/${cartItemId}`,
          snakecaseKeys(params)
        );
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    removeItem: async (cartToken, cartItemIds) => {
      const params = {
        cartItemIds,
      };
      try {
        const { data } = await myAxios.delete(
          `/v1/ppb/cart/${cartToken}/items`,
          { data: snakecaseKeys(params) }
        );
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    setFranchise: async (cartToken, franchiseId) => {
      const params = {
        franchiseId,
      };
      try {
        const { data } = await myAxios.put(
          `/v1/ppb/cart/${cartToken}/franchise`,
          snakecaseKeys(params)
        );
        return new Cart(data);
      } catch (e) {
        return e;
      }
    },

    createOrder: async (
      cartToken,
      selectedCartItemIds,
      customerPhone,
      customerName,
      savePhone,
      giftProductOptions = {}
    ) => {
      const params = {
        selectedCartItemIds,
        customerPhone,
        customerName,
        savePhone,
        giftProductOptions,
      };

      try {
        const { data } = await myAxios.post(
          `/v1/ppb/cart/${cartToken}/create_ppb_order`,
          snakecaseKeys(params)
        );
        return new Order(data);
      } catch (e) {
        return e;
      }
    },
  },
  me: {
    ordersList: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios
        .get(`/v1/ppb/my/orders?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
    couponsList: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios
        .get(`/v1/ppb/my/coupons?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
    eyesList: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios.get(`/v1/ppb/my/eyes?${toq(params)}`).then(({ data }) => {
        return data;
      });
    },
    reviewsList: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios
        .get(`/v1/ppb/my/reviews?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
    stockNotificationsList: (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      return myAxios
        .get(`/v1/ppb/my/stock_notifications?${toq(params)}`)
        .then(({ data }) => {
          return data;
        });
    },
  },
  // pagination 사용 불가
  franchises: {
    list: (params = {}) => {
      return myAxios.get(`/v1/ppb/hapakr/franchises-public?${toq(params)}`);
    },
    addFavorite: (id) => {
      return myAxios.put(`/v1/ppb/hapakr/franchises-public/${id}/add_favorite`);
    },
    removeFavorite: (id) => {
      return myAxios.put(
        `/v1/ppb/hapakr/franchises-public/${id}/remove_favorite`
      );
    },
  },
};

export default api;
