<template>
  <div id="addedproductlist">
    <h1>장바구니</h1>
    <table>
      <caption>장바구니에 담긴 제품</caption>
      <tr>
        <th>제목</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
      <tr>
        <th>총계</th>
        <td colspan="2">{{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AddedProductList",
  computend: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style>
</style>
