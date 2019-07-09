<template>
    <div class="bottombar">
        <div class="bottomOne">
            <div class="wrap">
                <ul>
                    <el-link href="javscript::" target="_blank">默认链接</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">友情链接</el-link><span> |</span>
                    <el-link href="javscript::" type="danger" target="_blank">热门搜索</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">新图上传</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">精品专题</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">设计师排行</el-link><span> |</span>
                </ul>
                <ul>
                    <el-link href="javscript::" target="_blank">汽车</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">房地产</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">餐饮</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">美容美发</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">健身</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">微商</el-link><span> |</span>
                </ul>
                <ul>
                    <el-link href="javscript::" target="_blank">展板展架</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">banner</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">易拉宝</el-link><span> |</span><span> |</span>
                    <el-link href="javscript::" target="_blank">邀请函</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">封面</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">主面</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">首页</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">简历</el-link><span> |</span>
                </ul>
                <ul>
                    <el-link href="javscript::" target="_blank">展架</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">优惠券</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">餐饮</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">边框</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">单页</el-link><span> |</span>
                    <el-link href="javscript::" target="_blank">代金券</el-link><span> |</span>
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
            <ul class="bottomThere-left">
                <li>
                    <a href="">
                        <img class="logo_black" src="@/assets/logo_black.png" alt="">
                    </a>
                </li>
            </ul>
            <ul class="bottomThere-right">
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'bottombar'
}
</script>

<style>
    .bottombar {
        width:100%;
        list-style: none;
        text-decoration: none;
        
    }
    .bottombar .bottomOne {
        border-top:4px solid #dbd9d9;
        border-bottom:4px solid #dbd9d9;
        width:100%;
    }
    .bottombar .bottomOne .wrap {
        width:1200px;
        margin:0 auto;
        box-sizing:border-box;
        padding:20px 80px;
    }
    .bottombar .bottomTwo {
        height:110px;
        width:800px;
        margin:0 auto;
    }
    .bottombar .bottomTwo .box {
        width:100%;
        height:100px;
        display: flex;
        justify-content: space-around;
        
    }
    .bottombar .bottomTwo .box div {
        text-align: center;
        margin:auto 0;
    }
    .bottombar .bottomThere {
        height:60px;
        width:100%;
        background-color:#f5f5f5
    }
    .bottombar .bottomThere .bottomThere-left {
        margin-left:100px;
        float:left;
        
    }
    .bottombar .bottomThere .bottomThere-left .logo_black{
        height:50px;
        width:130px;
    }
</style>


