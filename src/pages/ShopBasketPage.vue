<template>
  <div id="shopbasketpage">
    <div class="second-title">장바구니</div>
    <div class="shopbasket-contents">
      <div class="basket-item1">
        <AddedProductList></AddedProductList>
      </div>
      <div class="basket-item2">
        <Form></Form>
      </div>
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
.basket-item1{
  flex-basis: 60%;
  text-align: left;
}
.basket-item2{
  background-color: lightgray;
  margin: 2em 2%;
  flex-basis: 36%;
  height: auto;
}
.second-title{
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}
</style>

