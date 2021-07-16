<template>
  <div id="shopbasketpage">
    장바구니 페이지
    <AddedProductList></AddedProductList>
    <Form></Form>
  </div>
</template>

<script>
import AddedProductList from "@/components/AddedProductList.vue";
import Form from "@/components/Form.vue";
export default {
  name: "ShopBasketPage",
  components: {
    AddedProductList,
    Form
  }
};
</script>

<style>
</style>

