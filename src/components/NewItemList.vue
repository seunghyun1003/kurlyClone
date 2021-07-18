<template>
  <div id="newitemlist">
    <div class="newitem" :key="index" v-for="(product, index) in $store.state.products" @click="detailshow(index)">
      <div class="product-img">
        <img v-bind:src="product.img" />
      </div>
      <div class="product-info">
        <li class="product-info-title">{{ product.title }}</li>
        <li class="product-info-price">{{ product.price }}</li>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NewItemList",
  data() {
    return {
      
    }
  },
  props: ['product'],
  methods: {
    detailshow(index) {
      this.$router.push({
        name: "ProductPage",
        params: {
          contentId: index
        }
      })
    }
  }
}
</script>

<style scoped>
#newitemlist {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.newitem {
  flex-basis: 23%;
  height: 300px;
  margin: 1%;
  background-color: lightgray;
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
  text-align: left;
  height: 20%;
  padding: 2% 0;
}
.product-info-price {
  font-weight: bold;
}
</style>
