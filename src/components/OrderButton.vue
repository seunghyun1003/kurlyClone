<template>
  <div id="orderbutton">
    <div class="order-button">
        <div v-if="$store.getters.cartTotal > 0">
            <button class="button-style2" @click="order(addr)">주문하기</button>
        </div>
        <div v-else>
            <button class="button-style3">상품을 담아주세요</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderButton",
  props: ["addr"],
  data() {
    return {
    }
  },
  methods: {
    order(addr) {
      this.$store.dispatch("order",addr);
      this.$router.push('/order'); 
    },
  },
};
</script>

<style>
.order-button{
  background-color: white;
  padding: 0.6em 0;
}
.button-style2{
  background-color: #5f0080;
  border-radius: 0.42em;
  color: white;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: 1px solid #5f0080;
  font-weight: bold;
}
.button-style3{
  background-color: lightgray;
  border-radius: 0.42em;
  color: white;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: 1px solid lightgray;
  font-weight: bold;
}
</style>
