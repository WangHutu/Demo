<template>
  <div class="modulesbar">
    <div class="wrapper">
      <ul class="box">
        <li>
          <div class="logo">
            <img src="@/assets/logo_black.png" @click="homepage">
          </div>
        </li>
        <li>
          <div class="search">
            <input class="searchinput" type="text" /><!--
            --><button class="searchbtn">
              <img src="@/assets/search_flex.png" alt="">
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modulesBar',
  methods: {
    homepage () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
.modulesbar .wrapper {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
}
.modulesbar .wrapper .box {
  display: flex;
  justify-content: center;
  height: 168px;
  width: 100%;
}
.modulesbar .wrapper .box .logo{
  height: 80px;
  width: 180px;
  margin: 44px 20px;
}
.modulesbar .wrapper .box .logo img {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.modulesbar .wrapper .box .search {
  height: 46px;
  width: 400px;
  margin: 61px 20px;
}
.modulesbar .wrapper .box .search .searchinput {
  width: 300px;
  height: 40px;
}
.modulesbar .wrapper .box .search .searchinput:focus {
  border: 2px solid #2d78f4;
  outline: #2d78f4;
}
.modulesbar .wrapper .box .search .searchbtn {
  width: 80px;
  height: 46px;
  padding: 0;
  vertical-align: bottom;
  border: none;
}
.modulesbar .wrapper .box .search .searchbtn:focus {
  border: 2px solid #2d78f4;
  outline: #2d78f4;
}
.modulesbar .wrapper .box .search .searchbtn img {
  width: 100%;
  height: 100%;
}
</style>
