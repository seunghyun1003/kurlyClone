<template>
  <div id="shopbasketpage">
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

