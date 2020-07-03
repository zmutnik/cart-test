import { M_ADD_TO_CART, M_REMOVE_CART_ITEM } from "@/store/mutation.types";

const state = {
  selectedItems: []
};

const getters = {
  GET_TOTAL_PRICE: state => {
    return state.selectedItems.reduce((total, item) => {
      return total + item.C * item.quantity;
    }, 0);
  }
};

const actions = {};

const mutations = {
  [M_ADD_TO_CART](state, item) {
    const repeatedItem = state.selectedItems.find(
      cartItem => cartItem.G === item.G && cartItem.T === item.T
    );

    if (repeatedItem) {
      repeatedItem.quantity++;
    } else {
      state.selectedItems.push(item);
    }
  },
  [M_REMOVE_CART_ITEM](state, index) {
    const removedItem = state.selectedItems[index];

    if (removedItem.quantity > 1) {
      removedItem.quantity--;
    } else {
      state.selectedItems.splice(index, 1);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
