import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { Product, Products } from '~/utils/client/model/product';
import { JsonProduct, typeProduct } from '~/utils/client/types/product';
axios.defaults.withCredentials = true;

const isProduction = process.env.NODE_ENV === 'production';
const appKey = process.env.VUE_APP_APP_KEY as AppKey;

type AppKey = 'chuulens' | 'customer' | 'winc';
function baseURL() {
  if (isProduction) {
    return process.env.VUE_APP_API_HOST || 'https://theppbs.com/api';
  } else {
    return process.env.VUE_APP_API_HOST_DEV || 'https://dev.theppbs.com/api';
    // return 'http://localhost';
  }
}

function toq(params: Object) {
  return qs.stringify(params, {
    arrayFormat: 'brackets',
  });
}

const storeIdsByAppKey = {
  chuulens: ['chuulens'],
  customer: ['hapakristinkr'],
  winc: [''], // TODO
};

const myAxios = axios.create({
  baseURL: baseURL(),
  // baseURL: 'http://localhost',
  // baseURL: 'https://dev.theppbs.com',
});

interface Params {
  q: Partial<Q>;
}
interface Q {
  store_id_in: string[];
}
interface ResponseType<T> {
  total: number;
  records: T[];
}

const api = {
  foo: () => {
    console.log('foo');
  },
  meta: () => {
    return myAxios.get('/v1/meta');
  },
  products: {
    list: async (q: Q = { store_id_in: [] }) => {
      q['store_id_in'] = storeIdsByAppKey[appKey];
      try {
        const res = await myAxios.get(`/v1/ppb/products?${toq(q)}`);
        const products = new Products(res.data.records);
        return products;
      } catch (e) {
        return e;
      }
    },

    listChuulens: async (params: Partial<Params> = {}) => {
      params ||= {};
      params.q ||= {};
      params.q['store_id_in'] = ['chuulens'];
      try {
        const res: AxiosResponse<ResponseType<JsonProduct>> = await myAxios.get(
          `/v1/ppb/products?${toq(params)}`
        );
        console.log();
        console.log(res.data.records);
        const products = new Products(res.data.records);
        return products;
      } catch (e) {
        return e;
      }
    },
    byId: async (id: string | number) => {
      try {
        const res: AxiosResponse<JsonProduct> = await myAxios.get(
          `/v1/ppb/products/${id}`
        );
        return new Product(res.data);
      } catch (e) {
        return e;
      }
    },
  },
  franchises: {},
  collections: {},
  reviews: {
    list: (page = 1, limit = 10) => {},
  },
  myCoupons: {},
  myOrders: {},
  myReviews: {},
  getCart: () => {},
  getMe: () => {},
};

export default api;
