<template>
  <div class="modulesheader">
    <div class="wrapper">
      <div class="navTop">
        <el-button-group class="items">
          <el-button class="item itemlift">首页</el-button>
          <el-button class="item">地产海报</el-button>
          <el-button class="item">党建活动</el-button>
          <el-button class="item">电商淘宝</el-button>
          <el-button class="item">活动海报</el-button>
          <el-button class="item">办公文档</el-button>
          <el-button class="item">插图配图</el-button>
          <el-button class="item">广告设计</el-button>
          <el-button class="item itemright">更多....</el-button>
        </el-button-group>
      </div>
      <div class="swiper"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modulesHeader'
}
</script>

<style>
.modulesheader .wrapper {
  width: 1200px;
  margin: 0 auto;
}
.modulesheader .wrapper .navTop {
  width: 1200px;
  height: 45px;
}
.modulesheader .wrapper .navTop .item {
  width: 134px;
}
.modulesheader .wrapper .navTop .itemlift {
  border-radius: 10px 0 0 0;
}
.modulesheader .wrapper .navTop .itemright {
  border-radius: 0 10px 0 0;
}
</style>
