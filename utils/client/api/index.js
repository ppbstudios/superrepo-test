import axios from 'axios';
import qs from 'qs';
import { Product, Products } from '~/utils/client/model/product';
import { Cart } from '~/utils/client/model/cart';
import snakecaseKeys from 'snakecase-keys';

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
    listChuulens: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['chuu-web'];
      try {
        const { data } = await myAxios.get(`/v1/ppb/products?${toq(params)}`);
        console.log(data.records);
        return new Products(data.records);
      } catch (e) {
        return e;
      }
    },
    listHapakr: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['hapakristinkr'];
      try {
        const { data } = await myAxios.get(`/v1/ppb/products?${toq(params)}`);
        // console.log(data.records);
        return new Products(data.records);
      } catch (e) {
        return e;
      }
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
        console.log(data);
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
  franchises: {
    list: async (params = {}) => {
      try {
        const { data } = await myAxios.get(
          `/v1/ppb/hapakr/franchises-public?${toq(params)}`
        );
        // console.log(data.records);
        return new Franchises(data.records);
      } catch (e) {
        return e;
      }
    },
  },
  collections: {
    listHapakr: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['hapakristinkr'];
      try {
        const { data } = await myAxios.get(
          `/v1/ppb/collections?${toq(params)}`
        );
        console.log(data.records);
        return new Collections(data.records);
      } catch (e) {
        return e;
      }
    },
    byId: async (id) => {
      try {
        const { data } = await myAxios.get(`/v1/ppb/collections/${id}`);
        return new Collection(data);
      } catch (e) {
        return e;
      }
    },
  },
  reviews: {
    list: async (q = {}, page = 1, limit = 10) => {},
  },
  myCoupons: {
    list: async (q = {}, page = 1, limit = 10) => {},
  },
  myOrders: {
    list: async (q = {}, page = 1, limit = 10) => {},
  },
  myReviews: {
    list: async (q = {}, page = 1, limit = 10) => {},
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

    addItem: async (cartToken, ppbProductId, variantId, count = 1, packCount = 1) => {
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
  },
  me: {},
};

export default api;
