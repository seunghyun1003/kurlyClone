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

    <div id="productdetail">
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="상품설명">
            <img
              bottom
              src="../assets/images/dogfood-info.jpg"
              alt="Image 21"
            ></img>
            <img
              bottom
              src="../assets/images/dogfood-info2.jpg"
              alt="Image 21"
            ></img>
          </b-tab>
          <b-tab no-body title="상세정보">
            <img
              bottom
              src="../assets/images/dogfood-detail.jpg"
              alt="Image 25"
            ></img>
          </b-tab>
          <b-tab title="후기">
            <b-card-title
              >This tab does not have the <code>no-body</code> prop
              set</b-card-title
            >
            <b-card-text>
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
              nulla tempor. Laborum consequat non elit enim exercitation cillum
              aliqua consequat id aliqua. Esse ex consectetur mollit voluptate
              est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam
              velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim
              elit aliqua esse irure.
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import EditQuantity from "@/components/EditQuantity.vue";
export default {
  name: "ProductPage",
  components: {
    EditQuantity
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
#productdetail .tab-content {
  width: 1000px;
  height: auto;
}
</style>
