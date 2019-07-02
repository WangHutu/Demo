<template>
  <div class="pageHeader">
    <div class="headerSearch">
      <div>
        <input class="headerSearchInput" v-model="input" placeholder="请输入标题、关键字、作品编号搜索"></input>
        <button type="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    data() {
      return {
        input: ''
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
  .pageHeader{
    height:530px;
    width:1500px;
    margin:0 auto;
    background: url('../../../assets/header_bj.jpg') no-repeat;
    background-size:100% 100%;
  }
  .pageHeader .headerSearch {
    width:1500px;
    height:480px;
    text-align:center;
    line-height:480px;
    position:relative;
  }
  .pageHeader .headerSearch>div {
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
  .pageHeader .headerSearch .headerSearchInput {
    position:absolute;
    top:20px;;
    left:0;
    margin-top:-20px;
    display: inline-block;
    width:400px;
    height:50px;
    border:none;
    padding-left:10px;
  }
  .pageHeader .headerSearch button {
    display: inline-block;
    position: absolute;
    right:0;
    height:50px;
    background: url('../../../assets/search.png') no-repeat;
    background-size:100% 100%;
    width:100px;
    border:none;
    cursor:pointer;
  }
</style>
