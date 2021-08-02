<template>
  <div id="addedproductlist">
    <div>
      <div>
        <div class="table-header">
          <div>전체선택 | 선택삭제</div>
        </div>
        <div
          v-if="$store.getters.getcartProducts.length === 0"
          class="shopped-item"
        >
          장바구니에 담은 상품이 없습니다.
        </div>
        <div
          v-else
          class="shopped-item"
          :key="index"
          v-for="(cartproduct, index) in $store.getters.getcartProducts"
        >
          <div 
            class="shopped-imgtitle"
            @click="detailshow(index)"
          >
            <img src="../assets/images/dogfood.jpg" />
            <div class="shopped-title">{{ cartproduct.title }}</div>
          </div>
          <div id="editquantity">
            <button @click="subOrder(cartproduct)">-</button>
            <div>
              {{ cartproduct.quantity }}
            </div>
            <button @click="addOrder(cartproduct)">+</button>
          </div>
          <div class="shopped-price">
            {{ cartproduct.itemtotalprice }}원
          </div>
        </div>
        <div class="shopped-total">
          총 가격 :  {{ $store.getters.cartTotal }}원
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddedProductList",
  methods: {
    addOrder(cartproduct) {
      this.$store.dispatch("addOrder", cartproduct);
    },
    subOrder(cartproduct) {
      this.$store.dispatch("subOrder", cartproduct);
    },
    detailshow(index) {
      this.$router.push({
        name: "ProductPage",
        params: {
          contentId: index
        }
      });
    }
  },
};
</script>

<style>
#addedproductlist {
  flex-basis: 60%;
  text-align: left;
}
.table-header {
  padding-bottom: 1em;
  border-bottom: 1px solid black;
}
.shopped-item {
  display: flex;
  font-weight: 600;
  font-size: 600;
  height: 6em;
  padding: 0.5em;
  border-bottom: 1px solid lightgray;
}
.shopped-imgtitle {
  flex-basis: 60%;
  display: flex;
}
.shopped-imgtitle img {
  background-color: black;
  width: 60px;
  height: 80px;
  margin-right: 1.6em;
}
.shopped-imgtitle .shopped-title {
  margin: 2em 0;
}
.shopped-price {
  flex-basis: 20%;
  margin: 2em 0;
  text-align: center;
}
.shopped-total {
  width: 100%;
  margin: 2em 0;
  padding: 0 2em;
  font-weight: 600;
  font-size: large;
  text-align: right;
}

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
