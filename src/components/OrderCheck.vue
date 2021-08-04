<template>
  <div id="ordercheck">
    <div class="amount-div">
      <div class="amount-div-item">
        <div class="amount-title">상품금액</div>
        <div class="amount-value">{{ $store.getters.cartTotal }}원 </div>
      </div>
      <div class="amount-div-item">
        <div class="amount-title">
            배송비
            <b-icon icon="info-circle" id="tooltip-target-1"></b-icon>
            <b-tooltip target="tooltip-target-1" triggers="hover" placement="bottom">
                <b>30000원</b>이상 구매 시<br> 배송비 무료!
            </b-tooltip>
        </div>
        <div class="amount-value" >+{{ computeShippingFee }}원</div>
      </div>
    </div>
    <div class="totalamount-div">
      <div class="amount-title">결제예정금액</div>
      <div class="amount-value">{{ computeTotalAmount }}원</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCheck",
  data() {
      return {
          shippingfee: 0,
      }
  },
  computed: {
    computeShippingFee() {
      return this.$store.getters.cartTotal >= 30000 || this.$store.getters.cartTotal === 0 ? this.shippingfee=0 : this.shippingfee=3000
    },
    computeTotalAmount() {
      return this.$store.getters.cartTotal + this.shippingfee;
    }
  }
};
</script>

<style>
.address-form > div{
  font-size: large;
  font-weight: bold;
  padding-bottom: 0.5em;
}
.amount-div{
  border: 1px solid lightgray;
  width: 100%;
  padding: 1em 2.4em;
  background-color: rgb(250, 250, 250);
}
.amount-div-item{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em 0;
}
.totalamount-div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.1em 2.4em;
  border: 1px solid lightgray;
  background-color: rgb(250, 250, 250);
}
.amount-title, .amount-value{
    font-size: large;
}
.totalamount-div > .amount-value{
    font-size: larger;
    font-weight: bold;
}
</style>
