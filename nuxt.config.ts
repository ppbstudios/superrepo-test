// https://nuxt.com/docs/api/configuration/nuxt-config
const sitename = process.env.VUE_APP_APP_KEY || 'chuulens';

// yarn install error 방지
const site = [
  {
    name: `${sitename}Home`,
    path: '/',
    file: `~/${sitename}/home.vue`,
  },
];

const winc = [
  {
    name: `${sitename}Home`,
    path: '/',
    file: `~/${sitename}/home.vue`,
  },
  {
    name: `${sitename}Winc1`,
    path: '/winc1',
    file: `~/${sitename}/winc1.vue`,
  },
];

const chuulens = [
  {
    name: `${sitename}Home`,
    path: '/',
    file: `~/${sitename}/home.vue`,
  },
  {
    name: `${sitename}Chuu1`,
    path: '/chuu1',
    file: `~/${sitename}/chuu1.vue`,
  },
];
interface AllRoutes {
  [key: string]: any[];
}
const allRoutes: AllRoutes = { site, chuulens, winc };

export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    'pages:extend'(pages) {
      pages.push(...allRoutes[`${sitename}`]);
    },
  },
});
