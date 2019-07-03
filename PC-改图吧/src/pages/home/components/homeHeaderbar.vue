<template>
  <div class="homeHeaderbar">
    <div>
      <ul class="homeHeaderbar-left">
        <li>
          <a href>
            <img class="logo_black" src="../../../assets/loge_black.png" alt>
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
  name: "homeHeaderbar"
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
}
.homeHeaderbar {
  width: 1500px;
  height: 50px;
  margin: 0 auto;
  background-color: #fbfbfc;
}

.homeHeaderbar-left {
  float: left;
  margin-left: 100px;
  height: 50px;
}
.homeHeaderbar-left .logo_black {
  display: block;
  height: 50px;
  width: 130px;
}
.homeHeaderbar-right {
  line-height: 40px;
  float: right;
  margin-right: 100px;
  height: 50px;
}
</style>


