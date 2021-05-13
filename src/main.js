// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
//import { MglMap, MglMarker } from "vue-mapbox";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  if (process.isClient) {
    const VueMapbox = require('vue-mapbox').default;
    Vue.use(VueMapbox);
    Vue.component('MglMap', VueMapbox.MglMap);
    Vue.component('MglMarker', VueMapbox.MglMarker);
  }
}
