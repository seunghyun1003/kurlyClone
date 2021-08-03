<template>
  <div id="form">
    <div>
      <b-icon icon="geo-alt"></b-icon>배송지
    </div>
    <div>
      <b-modal ref="addr2-modal" hide-footer>
        <div class="d-block">
          <div>{{ addr1 }}</div> 
          <div><input v-model="addr2" placeholder="나머지 주소를 입력해주세요"/></div>
        </div>
        <b-button class="mt-3" variant="outline-danger" block>완료</b-button>
      </b-modal>
      <div>
        <div v-if="addr2">
          <div>{{ addr1 }}</div> 
          <div>{{ addr2 }}</div>
        </div> 
        <div v-else>
          배송지를 입력하세요!
        </div>
      </div>
      <button class="button-style1" @click="showApi">주소 검색</button>
    </div>
  </div>
</template>

<script>
import OrderCheck from "@/components/OrderCheck.vue"
export default {
  name: "Form",
  data() {
    return {
      zip: '',
      addr1: '',
      addr2: '',
    }
  },
  components: {
    OrderCheck
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

                this.zip = data.zonecode; //5자리 새우편번호 사용
                this.addr1 = fullRoadAddr;

                
                this.$refs['addr2-modal'].show()
            }
        }).open()
    }
  },
};
</script>

<style>
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
</style>
