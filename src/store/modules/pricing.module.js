import ApiService from "../../services/api.service";
import { API_PRICING, API_NAMES } from "../../helpers/api-call-names";

import { A_FETCH_PRICING, A_FETCH_NAMES } from "../action.types";
import { M_SET_PRICING, M_SET_NAMES } from "../mutation.types";

const state = {
  pricing: [],
  names: {}
};

const getters = {
  GET_PRICING: state => state.pricing,
  GET_NAMES: state => state.names
};

const actions = {
  async [A_FETCH_PRICING]({ commit }) {
    try {
      const pricingData = await ApiService.get(API_PRICING);

      if (pricingData?.data?.Success) {
        commit(M_SET_PRICING, pricingData?.data?.Value?.Goods);
      } else {
        throw Error(pricingData.Error);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async [A_FETCH_NAMES]({ commit }) {
    try {
      const names = await ApiService.get(API_NAMES);

      if (names.status === 200) {
        commit(M_SET_NAMES, names?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const mutations = {
  [M_SET_PRICING](state, pricingData) {
    const pricing = pricingData.reduce((data, item) => {
      const groupId = item.G;

      if (!data[groupId]) data[groupId] = [];
      data[groupId].push(item);

      return data;
    }, {});

    state.pricing = pricing;
  },
  [M_SET_NAMES](state, names) {
    state.names = names;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
