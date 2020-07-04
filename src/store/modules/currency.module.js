import { M_CHANGE_CURRENCY_RATIO } from "@/store/mutation.types";

const state = {
  currencyRatio: 20
};

const getters = {};

const actions = {};

const mutations = {
  [M_CHANGE_CURRENCY_RATIO](state) {
    state.currencyRatio = 20 + Math.floor(Math.random() * 61);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
