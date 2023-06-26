import axios from 'axios';
import qs from 'qs';
import {Product, Products} from '~/utils/client/model/product';

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
    listChuulens: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['chuulens'];
      try {
        const res  = await myAxios.get(`/v1/ppb/products?${toq(params)}`);
        console.log(res.data.records);
        return new Products(res.data.records);
      } catch (e) {
        return e;
      }
    },
    listHapakr: async (q = {}, page = 1, limit = 10) => {
      const params = { q, page, limit };
      params.q['store_id_in'] = ['hapakristinkr'];
      try {
        const res  = await myAxios.get(`/v1/ppb/products?${toq(params)}`);
        // console.log(res.data.records);
        console.log(JSON.stringify(res.data.records[0], null, 2));
        return new Products(res.data.records);
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
    byHandle: async (store_id, handle) => {
      try {
        const res  = await myAxios.get(`/v1/ppb/products?q[store_id_eq]=${store_id}&q[handle_eq]=${handle}`);
        if (res.data.total === 1) {
          return new Product(res.data.records[0]);
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
        const res  = await myAxios.get(`/v1/ppb/hapakr/franchises-public?${toq(params)}`);
        console.log(res.data.records);
        return new Franchises(res.data.records);
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
        const res  = await myAxios.get(`/v1/ppb/collections?${toq(params)}`);
        console.log(res.data.records);
        return new Collections(res.data.records);
      } catch (e) {
        return e;
      }
    },
    byId: async (id) => {
      try {
        const res  = await myAxios.get(`/v1/ppb/collections/${id}`);
        return new Collection(res.data);
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
    
  },
  me: {},
};

export default api;
