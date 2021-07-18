<template>
  <div id="bestpage">
    베스트 페이지
    <BestProductList></BestProductList>
  </div>
</template>

<script>
import BestProductList from "@/components/BestProductList.vue"
export default {
  name: "BestPage",
  components: {
    BestProductList
  }
};
</script>

<style>
</style>
