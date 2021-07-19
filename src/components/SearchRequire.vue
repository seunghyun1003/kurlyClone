<template>
  <div id="searchrequire">
    <div class="search-form-title">검색조건</div>
    <div class="search-form-input">
      <b-form-input placeholder="Search" id="input-default"></b-form-input>
    </div>
    <div class="search-form-button">
      <button>
        검색하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchRequire",
  data() {},
  methods: {}
};
</script>

<style>
#searchrequire {
  display: flex;
  width: 100%;
  border-top: 2px solid purple;
  border-bottom: 2px solid purple;
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
  background-color: purple;
  color: white;
  font-weight: 600;
}
</style>
