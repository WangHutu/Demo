<template>
  <div class="homeHeaderbar">
    <div class="wrapper">
      <ul class="homeHeaderbar-left">
        <li>
          <a href="#">
            <img class="logo_black" src="../../assets/logo_black.png" alt />
          </a>
        </li>
      </ul>
      <ul class="homeHeaderbar-right">
        <li>
          <el-button size="small" round>登录</el-button>
          <el-button size="small" round>我是设计师</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homeHeaderbar'
}
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
}
.homeHeaderbar {
  width: 100%;
  height: 70px;
  background-color: #fbfbfc;
  padding: 5px 0;
}
.homeHeaderbar .wrapper {
  width: 1500px;
  margin: 10px auto;
  height: 50px;
}

.homeHeaderbar-left {
  float: left;
  margin-left: 0px;
  height: 50px;
  line-height: 50px;
}
.homeHeaderbar-left .logo_black {
  display: block;
  height: 50px;
  width: 130px;
}
.homeHeaderbar-right {
  line-height: 50px;
  float: right;
  margin-right: 0px;
  height: 50px;
}
</style>
