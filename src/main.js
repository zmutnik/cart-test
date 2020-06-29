import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { API_BASE_URL } from "./helpers/api-call-names";
import ApiService from "./services/api.service";

Vue.config.productionTip = false;

ApiService.init(API_BASE_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
