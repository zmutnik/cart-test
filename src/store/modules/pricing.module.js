import { A_FETCH_PRICING } from "../action.types";

const state = {
  pricing: {}
};

const getters = {};

const actions = {
  [A_FETCH_PRICING]({ commit }) {
    commit();
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
