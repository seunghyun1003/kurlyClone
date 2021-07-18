<template>
  <div id="shopbasketpage">
    <div class="second-title">장바구니</div>
    <div class="shopbasket-contents">
      <AddedProductList></AddedProductList>
      <Form></Form>
    </div>
  </div>
</template>

<script>
import AddedProductList from "@/components/AddedProductList.vue"
import Form from "@/components/Form.vue"
export default {
  name: "ShopBasketPage",
  components: {
    AddedProductList,
    Form
  }
};
</script>

<style>
#shopbasketpage{
  width: 1000px;
  margin: 2em auto;
}
.shopbasket-contents{
  display: flex;
}
.second-title{
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}
</style>

