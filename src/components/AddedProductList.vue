<template>
  <div id="addedproductlist">
    <div>
      <div>
        <div class="table-header">
          <div>전체선택 | 선택삭제</div>
        </div>
        <div
          v-if="$store.getters.cartProducts.length === 0"
          class="shopped-item"
        >
          장바구니에 담은 상품이 없습니다.
        </div>
        <div
          v-else
          class="shopped-item"
          :key="index"
          v-for="(cartproduct, index) in $store.getters.cartProducts"
        >
          <div class="shopped-imgtitle">
            <img src="../assets/images/dogfood.jpg" />
            <div class="shopped-title">{{ cartproduct.title }}</div>
          </div>
          <div class="shopped-quantity">{{ cartproduct.quantity }}개</div>
          <div class="shopped-total">{{ $store.getters.cartTotal }}원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddedProductList"
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
  line-height: 5em;
  height: 5em;
  padding: 0.5em;
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
.shopped-quantity,
.shopped-total {
  flex-basis: 20%;
}
</style>
