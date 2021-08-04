<template>
  <div id="shopbasketpage">
    <div class="second-title">장바구니</div>
    <div class="shopbasket-contents">
      <div class="basket-item1">
        <AddedProductList></AddedProductList>
      </div>
      <div class="basket-item2">
        <div id="form">
          <div>
            <b-icon icon="geo-alt"></b-icon>배송지
          </div>
          <div>
            <b-modal id="modal" ref="addr2-modal" hide-footer title="상세 주소 입력" centered>
              <div class="d-block">
                <div class="d-addr1">{{ addr.addr1 }}</div> 
                <div class="d-addr2"><input type="text" required v-model="addr.addr2" placeholder="나머지 주소를 입력해주세요"/></div>
              </div>
              <div class="d-btns">
                <b-button type="reset" @click="onReset">리셋</b-button>
                <b-button type="submit" variant="primary" @click="onSubmit">완료</b-button>
              </div> 
            </b-modal>
            <div>
              <div v-if="addr.addr2">
                <div>{{ addr.addr1 }}&nbsp;[{{ addr.zip }}]</div> 
                <div>{{ addr.addr2 }}</div>
              </div> 
              <div v-else>
                배송지를 입력하세요!
              </div>
            </div>
            <button class="button-style1" @click="showApi">주소 검색</button>
          </div>
        </div>
        <OrderCheck/>
        <OrderButton v-bind:addr="addr"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddedProductList from "@/components/AddedProductList.vue"
import OrderCheck from "@/components/OrderCheck.vue"
import OrderButton from "@/components/OrderButton.vue"
export default {
  name: "ShopBasketPage",
  components: {
    AddedProductList,
    OrderCheck,
    OrderButton
  },
  data() {
    return {
      addr: 
        {
          zip: '',
          addr1: '',
          addr2: '',
        }
      
    }
  },
  methods: {
    showApi() {
        new window.daum.Postcode({ 
            oncomplete: (data) => {
                let fullRoadAddr = data.roadAddress; // 도로명 주소 변수 
                let extraRoadAddr = ''; // 도로명 조합형 주소 변수

                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname; 
                }

                if(data.buildingName !== '' && data.apartment === 'Y'){ 
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
                } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다. 

                if(extraRoadAddr !== ''){ 
                    extraRoadAddr = ' (' + extraRoadAddr + ')'; 
                } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다. 

                if(fullRoadAddr !== ''){ 
                    fullRoadAddr += extraRoadAddr; 
                } // 우편번호와 주소 정보를 해당 필드에 넣는다. 

                this.addr.zip = data.zonecode; //5자리 새우편번호 사용
                this.addr.addr1 = fullRoadAddr;

                
                this.$refs['addr2-modal'].show()
            }
        }).open()
    },
    onSubmit(event) {
      this.$bvModal.hide('modal')
    },
    onReset(event) {
      // Reset our form values
      this.addr.addr2 = '';
    },
  },
};
</script>

<style>
#shopbasketpage{
  width: 1000px;
  margin: 2em auto;
}
.shopbasket-contents{
  display: flex;
}
.basket-item1{
  flex-basis: 60%;
  text-align: left;
}
.basket-item2{
  background-color: lightgray;
  margin: 2em 2%;
  flex-basis: 36%;
  height: auto;
}
.second-title{
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}

#form {
  border: 1px solid lightgray;
  background-color: white;
  padding: 1.4em;
  text-align: left;
  font-size: large;
  font-weight: bold;
}
#form > div{
  font-size: large;
  font-weight: bold;
  padding-bottom: 0.5em;
}
.button-style1{
  background-color: inherit;
  border-radius: 0.42em;
  color: #5f0080;
  width: 100%;
  padding: 0.6em;
  font-size: small;
  margin: 1em auto 0;
  border: 1px solid #5f0080;
  font-weight: bold;
}

#modal .modal-title {
  background-color: inherit;
  font-weight: bolder;
  font-size: larger;
  border: none;
}
#modal .close {
  background-color: inherit;
  font-weight: bolder;
  font-size: larger;
  border: none;
}
.d-block .d-addr1{
  border: 1px solid lightgray;
  border-radius: 0.2em;
  background-color: rgb(250, 250, 250);
  padding: 0.6em;
  margin-bottom: 1.2em;
}
.d-block .d-addr2 > input[type="text"]{
  border: 1px solid lightgray;
  border-radius: 0.2em;
  background-color: white;
  padding: 0.6em;
  width: 100%;
  margin-bottom: 1.6em;
}
.d-btns{
  text-align: right;
}

.order-button{
  background-color: white;
  padding: 0.6em 0;
}
.button-style2{
  background-color: #5f0080;
  border-radius: 0.42em;
  color: white;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: 1px solid #5f0080;
  font-weight: bold;
}
.button-style3{
  background-color: lightgray;
  border-radius: 0.42em;
  color: white;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: 1px solid lightgray;
  font-weight: bold;
}
</style>

