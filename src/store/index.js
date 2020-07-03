import Vue from "vue";
import Vuex from "vuex";

import currency from "@/store/modules/currency.module";
import pricing from "@/store/modules/pricing.module";
import cart from "@/store/modules/cart.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currency,
    pricing,
    cart
  },
  state: {},
  mutations: {},
  actions: {}
});
