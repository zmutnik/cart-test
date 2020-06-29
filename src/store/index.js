import Vue from "vue";
import Vuex from "vuex";

import pricing from "./modules/pricing.module";
import cart from "./modules/cart.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pricing,
    cart
  },
  state: {},
  mutations: {},
  actions: {}
});
