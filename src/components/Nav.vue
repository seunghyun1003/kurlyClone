<template>
  <div id="nav">
    <div class="logo">
      <button @click="$router.push('/').catch(()=>{});">
        <img src="../assets/images/logo.png"/>
      </button>
    </div>
    <div class="menu-nav">
      <div>
        <b-button router-link to="/shopbasketpage">
          <b-icon icon="cart3"></b-icon>
        </b-button>
      </div>
      <div class="search-form">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          type="text"
          placeholder="검색어를 입력해주세요"
          v-model="keyword"
          @keyup.enter="searchresultshow(keyword)"
        ></b-form-input>
        <b-button
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          @click="searchresultshow(keyword)"
        >
          <b-icon icon="search"></b-icon>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      keyword: '',
      isResultShow: true,
    }
  },
  methods: {
    searchresultshow(keyword) {
      if (keyword !== ''){
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword,
            isResultShow: true,
          },
        });
        this.keyword = ''
      } else {
        alert('검색어를 입력해주세요!')
      }
    },
  }
};
</script>

<style>
#nav {
  border-bottom: 1px solid lightgray;
  margin-top: 1em;
}
.logo > button {
  border: none;
  background-color: inherit;
}
.logo img {
  width: auto;
  height: 80px;
}
.menu-nav {
  display: flex;
  text-align:right;
  width: 1000px;
  padding: 0 1em 0.6em 1em;
  flex-direction: row-reverse;
  margin: 0 auto;
}
.search-form {
  background-color: rgb(245, 245, 245);
  border:none;
  border-radius: 0.7em;
}
.search-form > input[type=text] {
  background-color: inherit;
  color:rgb(220, 220, 220);;
  font-weight: bold;
}
.menu-nav button,
.menu-nav a {
  background-color: inherit;
  color: black;
  border: none;
  padding-right: 1em;
}
.menu-nav button:hover,
.menu-nav button:focus,
.menu-nav a:hover,
.menu-nav a:focus {
  background-color: inherit;
  border: none;
  color: #5f0080;
}
.menu-nav > .search-form {
  display: flex;
}
</style>
