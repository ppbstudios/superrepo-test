const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const axios = require('axios');

const appKey = process.env.VUE_APP_APP_KEY;
const host = process.env.VUE_APP_API_HOST || 'https://theppbs.com';

const cacheRoot = path.resolve(__dirname, `../cache/${appKey}`);
const productsDir = path.resolve(cacheRoot, './products');
const collectionsDir = path.resolve(cacheRoot, './collections');
const brandsDir = path.resolve(cacheRoot, './brands');
const franchisesDir = path.resolve(cacheRoot, './franchises');
const settingsDir = path.resolve(cacheRoot, './settings');

const dirsByType = { productsDir, collectionsDir, franchisesDir, settingsDir };
const urlsByAppKey = {
  chuulens: {
    products: `${host}/api/v1/ppb/products?q[store_id_eq]=chuu-web`,
    collections: `${host}/api/v1/ppb/collections?q[store_id_eq]=chuu-web`,
    brands: null,
    franchises: `${host}/api/v1/ppb/hapakr/franchises-public`,
    settings: `${host}/api/v1/settings?app_key=${appKey}`,
  },
  winc: {
    products: `${host}/api/v1/ppb/winc/products`,
    collections: `${host}/api/v1/ppb/winc/collections`,
    brands: `${host}/api/v1/ppb/winc/brands`,
    franchises: `${host}/api/v1/ppb/hapakr/franchises-public`,
    settings: `${host}/api/v1/settings?app_key=${appKey}`,
  },
  customer: {
    products: `${host}/api/v1/ppb/hapakr/products`,
    collections: `${host}/api/v1/ppb/hapakr/collections`,
    brands: null,
    franchises: `${host}/api/v1/ppb/hapakr/franchises-public`,
    settings: `${host}/api/v1/settings?app_key=${appKey}`,
  },
};

function init() {
  _.each(dirsByType, (dir, key) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

function createFiles() {
  ['products', 'collections', 'brands'].forEach((type) => {
    const url = urlsByAppKey[appKey][type];
    const dir = dirsByType[`${type}Dir`];

    if (url) {
      console.log(`creating cache for ${type}`, url);

      axios.get(url).then((res) => {
        const { records } = res.data;
        writeJsonFile(records, `${dir}/all.json`);
        _.each(records, (record) => {
          const { id, handle } = record;
          writeJsonFile(record, `${dir}/${id}.json`);
          writeJsonFile(record, `${dir}/${handle}.json`);
        });
      });
    }
  });

  // franchises handle 이 없음
  const url1 = urlsByAppKey[appKey]['franchises'];
  const dir1 = dirsByType['franchisesDir'];
  axios.get(url1).then((res) => {
    console.log(`creating cache for franchises`, url1);

    const { records } = res.data;
    writeJsonFile(records, `${dir1}/all.json`);
    _.each(records, (record) => {
      const { id } = record;
      writeJsonFile(record, `${dir1}/${id}.json`);
    });
  });

  // settings 는 records 가 없음
  const url2 = urlsByAppKey[appKey]['settings'];
  const dir2 = dirsByType['settingsDir'];
  axios.get(url2).then((res) => {
    console.log(`creating cache for settings`, url2);

    writeJsonFile(res.data, `${dir2}/all.json`);
  });
}

function writeJsonFile(data, absPath) {
  fs.writeFileSync(absPath, JSON.stringify(data), 'utf8');
}

// main
init();
createFiles();
