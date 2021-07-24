<template>
  <div id="productpage">
    <div id="productsimple">
      <div class="product-img">
        <img src="../assets/images/dogfood.jpg" alt />
      </div>
      <div class="product-simpleinfo">
        <ul>
          <li class="title" v-text="product.title"></li>
          <li class="des" v-text="product.description"></li>
          <li class="price">{{ product.price }}원</li>
        </ul>
        <div>남은 수량 : {{ product.inventory }}개</div>
        <EditQuantity v-bind:product="product"></EditQuantity>
        
        {{ $store.getters.getcartProducts[product.id] }}
        <div class="total">총합계 : {{ $store.getters.getcartProductsthis(product).itemtotalprice }}원</div>
      </div>
    </div>
    
    <div id="productdetail">
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="상품설명">
            <img v-bind:src="product.infoimg"></img>
            <img v-bind:src="product.infoimg2"></img>
          </b-tab>
          <b-tab no-body title="상세정보">
            <img v-bind:src="product.detailimg2"></img>
          </b-tab>
          <!-- 리뷰 뷰어 -->
          <b-tab title="후기">
            <ul style="text-align:left;">
              <li><b-icon-check></b-icon-check>상품에 대한 문의를 남기는 공간입니다.</li>
            </ul>
            <!-- 리뷰 뷰어 헤더 -->
            <div class="review-item-header">
              <div class="review-item-producttitle"> 제품명 </div>
              <div class="review-item-reviewetitle"> 제목 </div>
              <div class="review-item-reviewer"> 작성자 </div>
              <div class="review-item-reviewedate"> 작성일 </div>
            </div>
            <!-- 리뷰 뷰어 아이템 -->
            <div 
              v-if="$store.getters.getproductReview(product).length === 0"
              class="review-item-none"
            >
              "{{product.title}}"상품에 댓글이 아직 없습니다.
            </div>
            <div 
              v-else
              class="review-item"
              v-for="review in $store.getters.getproductReview(product)"
            >
              <div class="review-item-producttitle">{{ product.title }}</div>
              <div class="review-item-reviewetitle">{{ review.reviewtitle }}</div>
              <div class="review-item-reviewer">{{ review.reviewer }}</div>
              <div class="review-item-reviewedate">{{ review.reviewedate }}</div>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import EditQuantity from "@/components/EditQuantity.vue";
export default {
  name: "ProductPage",
  components: {
    EditQuantity
  },
  data() {
    const index = this.$route.params.contentId;
    return {
      product: this.$store.state.products[index],
    };
  },
};
</script>

<style scoped>
#productpage {
  margin: 2em auto;
  width: 1000px;
}
#productsimple {
  display: flex;
  flex-direction: row;
}
.product-img {
  width: 400px;
  height: 500px;
  background-color: orchid;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.product-simpleinfo {
  padding: 1em 3em;
  text-align: left;
  font-weight: 600;
  width: 600px;
}
.product-simpleinfo .title,
.product-simpleinfo .price {
  font-size: 1.6em;
}
.product-simpleinfo .des {
  font-size: 0.85em;
  color: gray;
  padding-bottom: 2em;
}
.product-simpleinfo .total {
  font-size: 1.6em;
  text-align: right;
}
#productdetail {
  margin-top: 3em;
}
#productdetail .tab-content {
  width: 1000px;
  height: auto;
}
#productdetail img {
  width: 1000px;
  height: auto;
}
.review-item-header, .review-item{
  display:flex;
  width: 100%;
  padding: 1.75em 0;
  font-size: 0.85em;
}
.review-item-header{
  border-top: 2px solid purple;
  border-bottom: 1px solid lightgray;
  font-weight: 600;
}
.review-item-none{
  padding: 1.75em 0;
  font-size: 0.85em;
  border-bottom: 1px solid lightgray;
}
.review-item{
  border-bottom: 1px solid lightgray;
}
.review-item-producttitle{
  flex-basis: 30%;
}
.review-item-reviewetitle{
  flex-basis: 40%;
}
.review-item > .review-item-reviewetitle{
  text-align: left;
}
.review-item-reviewer, .review-item-reviewedate{
  flex-basis: 15%;
}
</style>
