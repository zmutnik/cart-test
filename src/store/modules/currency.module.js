import { M_CHANGE_CURRENCY_RATIO } from "@/store/mutation.types";

const state = {
  currencyRatio: 2.5
};

const getters = {};

const actions = {};

const mutations = {
  [M_CHANGE_CURRENCY_RATIO](state) {
    state.currencyRatio = (2 + Math.random() * 2).toFixed(2);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
