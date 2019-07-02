<template>
  <div class="nav_bar" :style="{background:white?'#fff':'#000'}">
    <div class="wraper">
      <img v-if="white" class="logo" src="../assets/img/ICO_log.png"  alt>
       <img v-if="!white"   class="logo" src="../assets/img/ICO_log_black.png"  alt>
      <ul class="nav_wraper">
        <li :key="item" v-for="item in nav" :style="{color:white?'#4f4b4c':'#f7f8f8'}">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
        <li :style="{color:white?'#4f4b4c':'#f7f8f8'}">……</li>
      </ul>
      <div class="search">
        <input type="text" placeholder="请输入标题、关键字、作品编号搜索" :style="{border:white?'':'none'}">
        <button :style="{border:white?'':'none'}">
          1
          <img src="../assets/img/search_ico.png" alt>
        </button>
      </div>
      <div class="user">
        <div class="photo">
          <img src="../assets/img/photo.png" alt>
        </div>
        <div class="nick">
          <p :style="{color:white?'#4f4b4c':'#fff'}">随 风</p>
          <h6>普通用户</h6>
        </div>
        <button>退出</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo
    };
  },
  props: {
    nav: {
      type: Array
    },
    white:{
      type:Boolean
    }
  },
  methods:{
    
  },
  mounted:function(){
    if(this.white){
      this.logo='../assets/img/ICO_log.png'
    }else{
      this.logo='../assets/img/ICO_log_black.png'
    }
    console.log(this.logo)
  }
};
</script>

<style>
.nav_bar {
  width: 100%;
  height: 6.25em;
  background: #000;
  padding: 1em 0;
  color: #f7f8f8;
}
.nav_bar .wraper {
  width: 94em;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 100%;
}
.nav_bar .wraper > * {
  vertical-align: middle;
}
.nav_bar .wraper .logo {
  height: 70%;
}
.nav_bar .wraper .nav_wraper {
  font-size: 1.1em;
  display: inline-block;
  line-height: 1em;
  margin-left: 5em;
}
.nav_bar .wraper .nav_wraper li {
  float: left;
  margin-right: 1em;
}
.nav_bar .wraper .nav_wraper li:last-child {
  cursor: pointer;
}
.nav_bar .wraper .search {
  height: 100%;
  display: inline-block;
  line-height: 4em;
  margin-left: 5em;
}
.nav_bar .wraper .search input {
  font-size: 0.8em;
  padding: 1em;
  width: 30em;
  border-radius: 0.3em 0 0 0.3em;
  border-style:solid;
  border-color:#ccc;
  border-width:1px 0px 1px 1px   
}
.nav_bar .wraper .search button {
  font-size: 0.8em;
  padding: 1em;
  border-radius: 0 0.3em 0.3em 0;
  width: 6em;
  background: linear-gradient(left, #ffa500, #f26e22);
  color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: relative;
   border-style:solid;
  border-color:#ccc;
  border-width:1px 1px 1px 0px  
}
.nav_bar .wraper .search button img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 70%;
}
.nav_bar .wraper .search button:hover {
  filter: contrast(150%);
}
.nav_bar .wraper .user {
  display: inline-block;
  height: 100%;
  margin-left: 5em;
  padding: 0.3em 0;
}
.nav_bar .wraper .user > * {
  display: inline-block;
  vertical-align: middle;
  margin-right: 1em;
}
.nav_bar .wraper .user .photo {
  height: 3.5em;
  width: 3.5em;
  border-radius: 4em;
  overflow: hidden;
}
.nav_bar .wraper .user .photo img {
  width: 100%;
}
.nav_bar .wraper .user p {
  text-align: center;
  font-size: 1em;
  color: #ddd;
  margin-bottom: 0.3em;
}
.nav_bar .wraper .user h6 {
  font-weight: 100;
  padding: 0 1em;
  background: linear-gradient(left, #ffa500, #f26e22);
  border-radius: 2em;
  font-size: 0.5em;
}
.nav_bar .wraper .user button {
  background: linear-gradient(left, #ffa500, #f26e22);
  padding: 0.2em 1.5em;
  color: #fff;
  border-radius: 2em;
  cursor: pointer;
  font-size: 0.8em;
}
.nav_bar .wraper .user button:hover {
  filter: contrast(150%);
}
</style>

