<template>
  <div id="productsimple">
    <div>{{data.title}}</div>
    <div>{{data.description}}</div>
    <div>{{data.price}}</div>
    <div>{{data.description}}</div>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "ProductSimple",
  data() {
    const index = this.$route.params.contentId;
    return {
      data: data[index],
      index: index
    };
  },
  methods: {}
};
</script>

<style>
</style>
