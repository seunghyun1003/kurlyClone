<template>
  <div id="searchrequire">
    <div class="search-form-title">검색조건</div>
    <div class="search-form-input">
      <b-form-input id="input-default">{{keyword}}</b-form-input>
    </div>
    <div class="search-form-button">
      <button>
        검색
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchrequire",
  props: ['keyword'],
  data() {},
  methods: {}
};
</script>

<style>
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
