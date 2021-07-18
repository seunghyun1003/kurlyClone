<template>
  <div id="searchpage">
    검색페이지
    <SearchRequire></SearchRequire>
    <SearchResult></SearchResult>
  </div>
</template>

<script>
import SearchRequire from "@/components/SearchRequire.vue"
import SearchResult from "@/components/SearchResult.vue"
export default {
  name: "SearchPage",
  components: {
    SearchRequire,
    SearchResult,
  },
}
</script>

<style>
</style>
