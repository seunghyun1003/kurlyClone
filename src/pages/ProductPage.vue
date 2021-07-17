<template>
  <div id="productpage">
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
#productpage {
  margin: 2em auto;
  width: 1000px;
}
</style>
