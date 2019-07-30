<template>
  <div class="mainHeader" :class="bgcolor">
    <div class="mainHeader_top">
      <h2>
        <a href="javascript::">{{title}}</a>
      </h2>
      <p>
        <span class="el-icon-minus"></span>
        ADVERTISING
        <span class="el-icon-minus"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data () {
    return {}
  },
  props: ['bgcolor', 'title']
}
</script>

<style>
.mainHeader {
  margin: 0 auto;
  width: 1200px;
  height: 100px;
}
.mainHeader .mainHeader_top {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 17px;
}
.mainHeader .mainHeader_top h2 a {
  color: #f6911e;
  line-height: 30px;
}
.mainHeader .mainHeader_top h2 a:hover {
  color: #f7ad59;
}
.mainHeader .mainHeader_top p {
  margin-top: 20px;
}
.mainHeader .mainHeader_page {
  height: 500px;
}
.mainHeader .mainHeader_page .mainHeader_page_imgs {
  display: flex;
  width: 100%;
}
.mainHeader
  .mainHeader_page
  .mainHeader_page_imgs
  .mainHeader_page_img {
  flex: 1;
  border: 1px solid black;
}
</style>
