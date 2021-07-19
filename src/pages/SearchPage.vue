<template>
  <div id="searchpage">
    <div class="second-title">
      상품검색
    </div>
    <SearchRequire></SearchRequire>
    <SearchResult></SearchResult>
  </div>
</template>

<script>
import SearchRequire from "@/components/SearchRequire.vue";
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "SearchPage",
  components: {
    SearchRequire,
    SearchResult
  }
};
</script>

<style>
#searchpage {
  width: 1000px;
  margin: 0 auto;
}
.second-title {
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}
</style>
