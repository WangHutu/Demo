<template>
  <div class="wrapper">
    <div class="mainheader">
      <span>
        <a href="">网站首页</a>
      </span>
      <i class="el-icon-arrow-right"></i>
      <span>
        <a href="">地产广告</a>
      </span>
      <i class="el-icon-arrow-right"></i>
      <span>
        <a href="">高端意境新中式地产广告</a>
      </span>
    </div>
    <div class="mainleft"></div>
    <div class="mainright"></div>
  </div>
</template>

<script>
export default {
  name: 'downloadMain'
}
</script>

<style>
.wrapper {
  width:1200px;
  margin: 80px auto 0;
}
.wrapper .mainheader {
  margin-left: 100px;
  color: #333;
  height: 50px;
}
.wrapper .mainheader a {
  color: #333;
  line-height: 50px;
}
.wrapper .mainleft {
  width: 710px;
  margin-right: 10px;
  float: left;
  border: 1px solid black;
  height: 100px;
  background: #FEFEFE;
}
.wrapper .mainright {
  margin-left: 720px;
  height: 100px;
  border: 1px solid red;
  background: #FEFEFE;
}
</style>
