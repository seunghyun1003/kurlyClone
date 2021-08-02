<template>
  <div id="form">
    <div class="address-form">
      <div>
        배송지
      </div>
      <div>
        서울특별시 금천구 ----
      </div>
      <div>
        <button>주소 입력</button>
      </div>
    </div>
    <div class="amount-div">
      <div class="amount-div-item">
        <div>
          상품금액
        </div>
        <div>
          35600원
        </div>
      </div>
      <div class="amount-div-item">
        <div>
          배송비
        </div>
        <div>
          +3000원
        </div>
      </div>
    </div>
    <div class="totalamount-div">
      <div>
        결제예정금액
      </div>
      <div>
        38600원
      </div>
    </div>
    <div class="order-button">
      <button>주문하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {}
};
</script>

<style>
#form {
}
.address-form{
  background-color: white;
  margin: 0.4em;
  padding: 0.6em;
}
.amount-div{
  width: 100%;
  margin: 0.4em;
  padding: 0.6em 2.4em;
}
.amount-div-item{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 0;
}
.totalamount-div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.1em 2.4em;
  border-top: 1px solid black;
}
.order-button{
  background-color: white;
  padding: 0.6em 0;
}
.order-button > button{
  background-color: rgb(83, 83, 83);
  color: white;
  width: 100%;
  padding: 0.6em;
  border: none;
}
</style>
