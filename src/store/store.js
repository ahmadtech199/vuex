import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // strict: false,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 }
    ]
  },
  getters: {
    //   anther way about build fuction   saleProduct:state => {}

    saleProduct(state) {
      var sale = state.products.map(product => {
        return {
          price: product.price / 2,
          name: "hello " + product.name

        }
      });
      return sale
    }


  },
  mutations: {
    reducePrice: (state, payload) => {

      state.products.forEach(product => {
        product.price -= payload;
      })

    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
})
