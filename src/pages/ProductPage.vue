<template>
  <div id="productpage">
    <div id="productsimple">
      <div class="product-img">
        <img src="../assets/images/dogfood.jpg" alt />
      </div>
      <div class="product-simpleinfo">
        <ul>
          <li class="title" v-text="product.title"></li>
          <li class="des" v-text="product.description"></li>
          <li class="price">{{ product.price }}원</li>
        </ul>
        <div>남은 수량 : {{ product.inventory }}개</div>
        <EditQuantity v-bind:product="product"></EditQuantity>
        <div class="total">총합계 : {{ $store.getters.cartTotal }}원</div>
      </div>
    </div>

    <div id="productdetail"></div>
  </div>
</template>

<script>
import EditQuantity from "@/components/EditQuantity.vue";
import ProductPage from "@/pages/ProductPage.vue";
export default {
  name: "ProductPage",
  components: {
    EditQuantity,
    ProductPage
  },
  data() {
    const index = this.$route.params.contentId;
    return {
      product: this.$store.state.products[index]
    };
  }
};
</script>

<style scoped>
#productpage {
  margin: 2em auto;
  width: 1000px;
}
#productsimple {
  display: flex;
  flex-direction: row;
}
.product-img {
  width: 400px;
  height: 500px;
  background-color: orchid;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.product-simpleinfo {
  padding: 1em 3em;
  text-align: left;
  font-weight: 600;
  width: 600px;
}
.product-simpleinfo .title,
.product-simpleinfo .price {
  font-size: 1.6em;
}
.product-simpleinfo .des {
  font-size: 0.85em;
  color: gray;
  padding-bottom: 2em;
}
.product-simpleinfo .total {
  font-size: 1.6em;
  text-align: right;
}
#productdetail {
  margin-top: 2em;
}
</style>
