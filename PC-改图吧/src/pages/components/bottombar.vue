<template>
  <div class="bottombar">
    <div class="bottomOne">
      <div class="wrap">
        <ul>
          <el-link :underline="false" href="javscript::" target="_blank">默认链接</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">友情链接</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" type="danger" target="_blank">热门搜索</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">新图上传</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">精品专题</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">设计师排行</el-link>
        </ul>
        <ul>
          <el-link :underline="false" href="javscript::" target="_blank">汽车</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">房地产</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">餐饮</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">美容美发</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">健身</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">微商</el-link>
        </ul>
        <ul>
          <el-link :underline="false" href="javscript::" target="_blank">展板展架</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">banner</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">易拉宝</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">邀请函</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">封面</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">主面</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">首页</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">简历</el-link>
        </ul>
        <ul>
          <el-link :underline="false" href="javscript::" target="_blank">展架</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">优惠券</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">餐饮</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">边框</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">单页</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::" target="_blank">代金券</el-link>
        </ul>
      </div>
    </div>
    <div class="bottomTwo">
      <div class="box">
        <div>
          <span class="el-icon-star-off"></span>
          <p>接地气</p>
        </div>
        <div>
          <span class="el-icon-star-off"></span>
          <p>大众化</p>
        </div>
        <div>
          <span class="el-icon-star-off"></span>
          <p>免费下载</p>
        </div>
        <div>
          <span class="el-icon-star-off"></span>
          <p>原创授权</p>
        </div>
        <div>
          <span class="el-icon-star-off"></span>
          <p>海量素材</p>
        </div>
        <div>
          <span class="el-icon-star-off"></span>
          <p>优质服务</p>
        </div>
      </div>
    </div>
    <div class="bottomThere">
      <div class="container">
        <ul class="bottomThere-left">
          <li>
            <a :underline="false" href>
              <img class="logo_black" src="@/assets/logo_black.png">
            </a>
          </li>
        </ul>
        <ul class="bottomThere-right">
          <el-link :underline="false" href="javscript::">今日新图</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">热门专题</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">设计图片</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">售后服务</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">关于我们</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">联系我们</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">加入我们</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">帮助中心</el-link>
          <span>|</span>
          <el-link :underline="false" href="javscript::">在线客服</el-link>
          <span>|</span>
        </ul>
      </div>
    </div>
    <div class="bottomFour">
      <div class="remarks">
        <div>为了防范电信网络诈骗，如接到962110来电，请立即接听</div>
        <div>沪ICP备16053114号-2 ICP证:沪B2-20180032 沪公网安备31011502400137号 Copyright©2016-2019 包图网ibaotu.com 版权所有</div>
        <div> 上海工商 广播电视节目制作经营许可证（沪）字第03172号网络文化经营许可证 沪网文{2019}2346-159号《包图网络服务使用协议》《包图隐私政策》</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottombar'
}
</script>

<style>
.bottombar {
  width: 100%;
  list-style: none;
  text-decoration: none;
}
.bottombar .bottomOne {
  border-top: 4px solid #dbd9d9;
  border-bottom: 4px solid #dbd9d9;
  width: 100%;
}
.bottombar .bottomOne .wrap {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 80px;
}
.bottombar .bottomTwo {
  height: 110px;
  width: 800px;
  margin: 0 auto;
}
.bottombar .bottomTwo .box {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.bottombar .bottomTwo .box div {
  text-align: center;
  margin: auto 0;
}
.bottombar .bottomThere {
  height: 70px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 5px 0;
  list-style: none;
  text-decoration: none;
}
.bottombar .bottomThere .container {
  height: 70px;
  width: 1500px;
  margin: 0 auto;
}
.bottombar .bottomThere .bottomThere-left {
  float: left;
  margin: 10px 0;
  height: 50px;
}
.bottombar .bottomThere .bottomThere-left .logo_black {
  height: 50px;
  width: 130px;
}
.bottombar .bottomThere .bottomThere-right {
  float: right;
  width: 800px;
  height: 50px;
  margin: 10px 270px 10px 0;
  line-height: 50px;
  font-size: 25px;
}
.bottombar .bottomFour {
  width:100%;
  height:150px;
}
.bottombar .bottomFour .remarks {
  width:1500px;
  height:100px;
  margin:25px auto;
  text-align: center;
  line-height: 30px;
}
</style>
