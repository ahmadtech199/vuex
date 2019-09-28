<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,index) in saleProduct" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(3)">reduce Price</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  // use props without store vuex
  // props: ["products"],
  // data() {
  //   return {};
  // }
  computed: {
    products() {
      return this.$store.state.products;
    },

    // this is way long char
    // saleProduct() {
    //   return this.$store.getters.saleProduct;
    // },

    // and this is shortcut getters
    ...mapGetters(["saleProduct"])
  },
  methods: {
    // reducePrice: function(amount) {
    // use this without function mutation in store
    // this.$store.state.products.forEach(product => {
    //   product.price -= 2;
    // });

    // use about mutations
    // this.$store.commit('reducePrice')
    // use about action and this is way long char
    // this.$store.dispatch("reducePrice", amount);
    // }
    // and this is shortcut
    ...mapActions(["reducePrice"])
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
