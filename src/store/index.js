import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(
        (item) => (item.head.onSale)
          || (item.torso.onSale)
          || (item.leftArm.onSale)
          || (item.rightArm.onSale)
          || (item.base.onSale),
      );
    },
  },
});
