// https://nuxt.com/docs/api/configuration/nuxt-config
const sitename = process.env.VUE_APP_APP_KEY;

const routes = (sitename: string) => [
  {
    name: `${sitename}Home`,
    path: "/",
    file: `~/${sitename}/home.vue`,
  },
  {
    name: `${sitename}Chuu1`,
    path: "/chuu1",
    file: `~/${sitename}/chuu1.vue`,
  },
  {
    name: `${sitename}Winc1`,
    path: "/winc1",
    file: `~/${sitename}/winc1.vue`,
  },
];

const winc = [
  {
    name: `${sitename}Home`,
    path: "/",
    file: `~/${sitename}/home.vue`,
  },
  {
    name: `${sitename}Winc1`,
    path: "/winc1",
    file: `~/${sitename}/winc1.vue`,
  },
];


const chuulens = [
  {
    name: `${sitename}Home`,
    path: "/",
    file: `~/${sitename}/home.vue`,
  },
  {
    name: `${sitename}Chuu1`,
    path: "/chuu1",
    file: `~/${sitename}/chuu1.vue`,
  },
];

const allRoutes = { chuulens, winc }

export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    "pages:extend"(pages) {
      pages.push(...allRoutes[`${sitename}`]);
    },
  },
});
