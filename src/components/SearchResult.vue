<template>
  <div id="searchresult">
    <div class="result-title">
      총 {{$store.getters.getFilteredProduct(keyword).length}}개의 상품이 검색되었습니다.
    </div>
    <div class="result-items">
      <div
      class="resultitem"
      :key="index"
      v-for="(product, index) in $store.getters.getFilteredProduct(keyword)"
      @click="detailshow(index)"
    >
      <div class="product-img">
        <img v-bind:src="product.productimg" />
      </div>
      <div class="product-info">
        <li class="product-info-title">{{ product.title }}</li>
        <li class="product-info-price">{{ product.price }}원</li>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: [ 'keyword'],
  data() {
    return {
      
    }
  },
  methods: {}
}
</script>

<style>
.result-title{
  margin-bottom: 1em;
  font-size: larger;
  text-align: left;
  font-weight: bolder;
}
.result-items {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.resultitem {
  flex-basis: 23%;
  height: 300px;
  margin: 1%;
  display: flex;
  flex-direction: column;
}
.product-img {
  width: 100%;
  height: 80%;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.product-info {
  text-align: center;
  height: 20%;
  padding: 2% 0;
}
.product-info-price {
  font-weight: bold;
}
</style>
