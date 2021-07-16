<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/images/logo.png"></img>
    </div>
    <div class="menu-nav">
        <div class="nav-item">
            <b-button>BEST</b-button>
        </div>
        <div class="nav-item">
            <div class="search-form">
                <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="Search">
                </b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">
                    <b-icon icon="search"></b-icon>
                </b-button>
            </div>
            <b-button><b-icon icon="cart3"></b-icon></b-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
#nav{
    border-bottom: 1px solid lightgray;
    margin-top: 1em;
}
.logo > img{
    width: auto;
    height: 80px;
}
.menu-nav{
    display: flex;
    justify-content: space-between;
    width: 1000px;
    padding: 0 1em 0.6em 1em;
    margin: 0 auto;
}
.nav-item{
    display: flex;
}
.nav-item > button {
    background-color: inherit;
    color: black;
    border: none;
}
.nav-item > button:hover, .nav-item > button:focus {
    background-color: inherit;
    border: none;
    color: rgb(92, 37, 92);
}
.nav-item > .search-form {
    display: flex;
}

</style>
