import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import { API_BASE_URL } from "@/helpers/api-call-names";
import ApiService from "@/services/api.service";
import currencyFilter from "@/filters/currency.filter.js";

import "@/assets/optimize.styl";
import "@/assets/default.styl";

Vue.config.productionTip = false;

Vue.filter("currencyFilter", currencyFilter);

ApiService.init(API_BASE_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
