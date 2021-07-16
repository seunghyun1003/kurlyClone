<template>
  <div id="mainpage">
    <div class="second-title">이 상품 어때요?</div>
    <NewItemList></NewItemList>
  </div>
</template>

<script>
import NewItemList from "@/components/NewItemList.vue";
export default {
  name: "MainPage",
  components: {
    NewItemList
  }
};
</script>

<style>
.second-title {
  font-size: 1.6em;
  font-weight: bold;
  line-height: 6em;
  height: 6em;
}
</style>
