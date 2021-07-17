<template>
  <div id="productsimple" >
    <div class="productitem">
      <div class="product-img">
        <img v-bind:src="product.img" alt />
      </div>
      <div class="product-simpleinfo">
        <ul>
          <li class="title" v-text="product.title"></li>
          <li class="des" v-text="product.description"></li>
          <li class="price">{{ product.price }}원</li>
        </ul>
        <button @click="addProductToCart(product)">
          카트 추가
        </button>
        <div class="addprice">총합계</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSimple",
  data() {
    const index = this.$route.params.contentId;
    return{
        product: this.$store.state.products[index],
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    }
  }
};
</script>

<style scoped>
.productitem{
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
</style>
