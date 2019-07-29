<template>
  <div class="flexbar" ref="flex">
    <div class="flexbox">
      <ul class="flexlogo">
        <el-link class="bar" :underline="false">
          <router-link :to=" {name:'Home'} ">
            <img class="logo" src="@/assets/logo_black.png" />
          </router-link>
        </el-link>
        <el-link class="bar" :underline="false" href="javscript::" target="_blank">首页</el-link>
        <el-link class="bar" :underline="false" href="javscript::" target="_blank">分类</el-link>
        <el-link class="bar" :underline="false" href="javscript::" target="_blank">VIP</el-link>
        <el-link class="bar" :underline="false" href="javscript::" target="_blank">设计师排行</el-link>
      </ul>
      <ul class="flexsearch">
        <li class="messge">
          <p class="name"> {{admin.name}} </p>
          <p class="title"> {{admin.title}} </p>
        </li>
        <li>
          <img :src="admin.portrait" class="portrait" />
        </li>
        <li>
          <input class="flexinput" type="text" />
          <button class="flexbutton"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flexbar',
  data () {
    return {
      admin: {
        id: 1,
        name: '随风',
        portrait: require('../../assets/portrait.png'),
        title: '设计师'
      }
    }
  },
  mounted () {
    console.log('flex组件加载')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    console.log('flex组件销毁')
  },
  methods: {
    handleScroll () {
      let scrollY = window.scrollY
      if (scrollY >= 800) {
        this.$refs.flex.style = 'display:block;'
      } else {
        this.$refs.flex.style = 'display:none;'
      }
    }
  }
}
</script>

<style>
.flexbar {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
  display: none;
}
.flexbar .flexbox {
  width: 1200px;
  height: 70px;
  padding: 5px;
  margin: 0 auto;
}
.flexbar .flexbox .flexlogo {
  height: 70px;
  text-decoration: none;
  list-style: none;
  float: left !important;
}
.flexbar .flexbox .flexlogo .logo {
  width: 130px;
  height: 50px;
  padding: 10px;
  margin: 0 20px 0;
}
.flexbar .flexbox .flexlogo .bar {
  margin-right: 20px;
}
.flexbar .flexbox .flexsearch li {
  float: right;
  height: 70px;
  line-height: 70px;
}
.flexbar .flexbox .flexsearch .messge {
  height: 60px;
  padding:5px;
  margin-right: 20px;
}
.flexbar .flexbox .flexsearch .messge .name {
  color:#333;
  font-size: 23px;
  height: 41px;
  width: 70px;
  text-align: center;
  line-height: 41px;
}
.flexbar .flexbox .flexsearch .messge .title {
  height: 15px;
  width: 70px;
  line-height: 15px;
  background-color: rgb(241, 122, 10);
  border-radius: 40px;
  text-align: center;
  color: #fff;
  font-size: 5px;
  padding: 2px 0;
}
.flexbar .flexbox .flexsearch .portrait {
  width: 60px;
  height: 60px;
  margin: 5px 5px 5px 120px;
  border-radius: 50%;
}
.flexbar .flexbox .flexsearch .flexinput {
  height: 40px;
  width: 300px;
  margin: 15px 0 15px;
  float: left;
  box-sizing: border-box;
}
.flexbar .flexbox .flexsearch .flexinput:focus {
  border: 1px solid #2d78f4;
  outline: #2d78f4;
}
.flexbar .flexbox .flexsearch .flexbutton {
  height: 41px;
  width: 80px;
  line-height: 70px;
  margin: 14px 0 14px;
  background: url("../../assets/search_flex.png");
  background-size: 100% 100%;
  float: left;
  box-sizing: border-box;
}
.flexbar .flexbox .flexsearch .flexbutton:focus {
  border: 1px solid #2d78f4;
  outline: #2d78f4;
}
</style>
