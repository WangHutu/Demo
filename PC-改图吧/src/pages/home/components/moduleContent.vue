<template>
  <div class="moduleContent" :class="bgcolor">
    <div class="contentMain">
      <!-- <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="6"> -->
      <div class="pic" v-for="item in theme" :key="item.id">
        <img class="img" :src="item.imgSrc" alt />
        <p>{{item.name}}</p>
      </div>
      <!-- </el-col> -->
    </div>
    <div class="moduleBottom">
      <a href="javascript::" class="bottom">
        点击查看更多...
        <span class="el-icon-arrow-right"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moduleContent',
  data () {
    return {}
  },
  props: ['bgcolor', 'theme']
}
</script>

<style>
.moduleContent {
  width: 1200px;
  margin: -0 auto;
}
.moduleContent .contentMain {
  width: 1200px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.moduleContent .contentMain .pic {
  display: inline-block;
  width: 280px;
  text-align: center;
  background-color: #e9e9e9;
  border-radius: 20px;
  margin: 10px;
}
.moduleContent .contentMain .pic .img {
  width: 85%;
  margin: 20px 0;
}
.moduleContent .contentMain .pic p {
  line-height: 5px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
}
.moduleBottom {
  width: 100%;
  line-height: 70px;
  text-align: center;
}
.moduleBottom .bottom {
  color: #333;
}
.moduleBottom .bottom:hover {
  color: #f98722;
  margin-right: 4px;
}
</style>
