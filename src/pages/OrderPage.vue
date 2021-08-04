<template>
  <div id="orderpage">
    <div class="second-title">주문서</div>
    <div class="ordersheet">
      <div class="ordersheet-item">
        <h4>
          주문상품
        </h4>
        <div class="ordered-items">
          <div :key="index" v-for="(cartproduct, index) in $store.getters.getcartProducts">
            <div
              class="shopped-item"
              v-if="cartproduct.quantity > 0">
              <div 
              class="shopped-imgtitle"
              @click="detailshow(index)"
                >
                <img src="../assets/images/dogfood.jpg" />
                <div class="shopped-title">{{ cartproduct.title }}</div>
              </div>
              <div class="shopped-price">{{ cartproduct.quantity }}개</div>
              <div class="shopped-price">
                {{ cartproduct.itemtotalprice }}원
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ordersheet-item">
        <h4>
          배송 정보
        </h4> 
        <div>
          <div>배송지 : {{ $store.state.ordersheet[0].addr1 }}&nbsp;[{{ $store.state.ordersheet[0].zip }}]&nbsp;{{ $store.state.ordersheet[0].addr2 }}</div>
        </div>
      </div>
      <div class="ordersheet-item">
        <h4>
          결제 수단
        </h4>
        <div>
          <div>카카오페이 결제</div>
          <div>일반 결제</div>
          <div>네이버페이 결제</div>
          <div>휴대폰 결제</div>
        </div>
      </div>
    </div>
    
    
    <div>
      <button>결제하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      
    }
  },
};
</script>

<style>
#orderpage {
  width: 1000px;
  margin: 2em auto;
}
.second-title{
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}
.ordersheet{
  text-align: left;
}
.ordersheet-item {
  margin-bottom: 3em;
}
.ordersheet-item > h4 {
  padding: 0.8em 0;
  border-bottom: 1px solid black;
  font-size:larger;
  font-weight: bold;
}
</style>
