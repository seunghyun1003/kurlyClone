<template>
  <div id="searchpage">
    <div class="second-title">
      상품검색
    </div>
    <div id="searchrequire">
      <div class="search-form-title">검색조건</div>
      <div class="search-form-input">
        <b-form-input id="input-default" 
        type="text"
        v-model="keyword"
        v-on:input="keywordChanged()"
        v-on:keyup.enter="searchresultshow(keyword)"
        >
        {{keyword}}
        </b-form-input>
      </div>
      <div class="search-form-button">
        <button @click="searchresultshow(keyword)">
          검색
        </button>
      </div>
    </div>
    {{isResultShow}}
    <SearchResult v-if="isResultShow" v-bind:keyword="keyword"></SearchResult>
    <div v-else>
      아직 검색어를 입력하지 않았습니다.
    </div>
  </div>
</template>

<script>
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "SearchPage",
  components: {
    SearchResult
  },
  data() {
    return {
      isResultShow:true,
      keyword: this.$route.params.keyword
    }
  },
  methods: {
    searchresultshow(keyword) {
      console.log('"',keyword,'"' + ' 검색')
      if (keyword !== ''){
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword
          },
        }).catch(()=>{});
        this.isResultShow = true
      } else {
        alert('검색어를 입력해주세요!')
      }
    },
    keywordChanged() {
      this.isResultShow = false
    }
  }
};
</script>

<style>
#searchpage {
  width: 1000px;
  margin: 0 auto;
}
.second-title {
  font-size: 1.6em;
  font-weight: bold;
  line-height: 4em;
  height: 4em;
}


#searchrequire {
  display: flex;
  width: 100%;
  border-top: 2px solid #5f0080;
  border-bottom: 2px solid #5f0080;
  padding: 1.5em;
  justify-content: space-evenly;
  margin-bottom: 3em;
}
.search-form-title {
  flex-basis: 10%;
  line-height: 2.375em;
  text-align: left;
  font-weight: 600;
}
.search-form-input {
  flex-basis: 60%;
}
.search-form-input > input[type="text"] {
  width: 100%;
}
.search-form-button {
  flex-basis: 18%;
}
.search-form-button > button {
  width: 100%;
  height: 2.375em;
  background-color: #5f0080;
  border: 1px solid #5f0080;
  border-radius: 0.4em;
  color: white;
  font-weight: 600;
}
</style>
