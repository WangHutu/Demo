<template>
  <div class="page_header">
    <div class="nav_top">
      <ul class="nav_top_left">
        <li>
					<a href=""><img  class="logo_black" src="../assets/loge_black.png" alt=""></a>
				</li>
      </ul>
      <ul class="nav_top_right">
        <li>
          <el-button size="small" round>登录</el-button>
          <el-button size="small" round>我是设计师</el-button>
        </li>
      </ul>
    </div>
    <div class="header_search">
      <div>
        <input class="header_search_input" v-model="input" placeholder="   请输入标题、关键字、作品编号搜索"></input>
        <button type="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page_header',
    data () {
      return {
        input:''
      }
    },
    components: {

    }
  }

</script>

<style>
  * {
    margin:0px;
    padding:0px;
    list-style:none;
    text-decoration:none;
  }
  .page_header{
    height:530px;
    width:1500px;
    margin:0 auto;
    background: url('../assets/header_bj.jpg') no-repeat;
    background-size:100% 100%;
  }
  .page_header .nav_top{
    height:50px;
    width:100%;
    background-color:#FCFCFA;
  }
  .page_header .nav_top .nav_top_left {
    float:left;
    margin-left:100px;
    height:50px;
  }
  .page_header .nav_top .nav_top_left .logo_black {
    display: block;
    height:50px;
    width:130px;
  }
  .page_header .nav_top .nav_top_right {
    line-height:40px;
    float:right;
    margin-right:100px;
    height:50px;
  }
  .page_header .header_search {
    width:1500px;
    height:480px;
    text-align:center;
    line-height:480px;
    position:relative;
  }
  .page_header .header_search>div {
    width:500px;
    height:50px;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-250px;
    margin-top:-25px;
    text-align: center;
    line-height:50px;
  }
  .page_header .header_search .header_search_input {
    position:absolute;
    top:20px;;
    left:0;
    margin-top:-20px;
    display: inline-block;
    width:400px;
    height:50px;
    border:none;
  }
  .page_header .header_search button {
    display: inline-block;
    position: absolute;
    right:0;
    height:50px;
    background: url('../assets/search.png') no-repeat;
    background-size:100% 100%;
    width:100px;
    border:none;
    cursor:pointer;
  }
</style>
