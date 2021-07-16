<template>
  <div id="productpage">
    제품 상세 페이지
    <ProductSimple></ProductSimple>
    <ProductDetail></ProductDetail>
  </div>
</template>

<script>
import ProductSimple from "@/components/ProductSimple.vue";
import ProductDetail from "@/components/ProductDetail.vue";
export default {
  name: "ProductPage",
  components: {
    ProductSimple,
    ProductDetail
  }
};
</script>

<style>
</style>
