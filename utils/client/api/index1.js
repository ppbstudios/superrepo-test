import axios from 'axios';
import qs from 'qs';
import { Product, Products } from '~/utils/client/model/product';

axios.defaults.withCredentials = true;

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

const api = {
  foo: () => {
    console.log('foo');
  },
  meta: () => {
    return myAxios.get('/v1/meta');
  },
  products: {
    list: async (q = null) => {
      q ||= {};
      q['store_id_in'] = storeIdsByAppKey[appKey];
      try {
        const res  = await myAxios.get(`/v1/ppb/products?${toq(q)}`);
        const products = new Products(res.data.records);
        return products;
      } catch (e) {
        return e;
      }
    },
    listChuulens: async (params = null) => {
      params ||= {};
      params.q ||= {};
      params.q['store_id_in'] = ['chuulens'];
      try {
        const res  = await myAxios.get(`/v1/ppb/products?${toq(params)}`);
        console.log(res.data);
        const products = new Products(res.data.records);
        return products;
      } catch (e) {
        return e;
      }
    },
    byId: async (id) => {
      try {
        const res  = await myAxios.get(`/v1/ppb/products/${id}`);
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
