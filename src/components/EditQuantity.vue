<template>
  <div id="editquantity">
    <button @click="subOrder(product)">-</button>
    <div v-if="$store.getters.cartProducts.length === 0">
      0
    </div>
    <div v-else>
      {{ $store.getters.cartProducts[0].quantity }}
    </div>
    <button @click="addOrder(product)">+</button>
  </div>
</template>

<script>
export default {
  name: "EditQuantity",
  props: ["product"],
  methods: {
    addOrder(cartproduct) {
      this.$store.dispatch("addOrder", cartproduct);
    },
    subOrder(cartproduct) {
      this.$store.dispatch("subOrder", cartproduct);
    }
  }
};
</script>

<style>
#editquantity {
  flex-basis: 20%;
  display: flex;
  max-width: 80px;
  border: 1px solid lightgray;
  height: 2em;
  margin: 2em 0;
}
#editquantity > button {
  flex-basis: 30%;
  background-color: inherit;
  border: none;
}
#editquantity > div {
  flex-basis: 40%;
  text-align: center;
}
</style>
