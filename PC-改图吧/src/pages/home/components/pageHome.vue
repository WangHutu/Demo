<template>
    <div class="home_wrap">
        <div class="navTop">
            <el-button-group>
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
        <div class="home">
            <div class="homBunner">
                <img src="../../../assets/home_top.png">
            </div>
            <div class="homeCard">
                <el-carousel :interval="4000" type="card" height="250px">
                    <el-carousel-item v-for="item in homeCar" :key="item.id">
                        <img :src="item.carSrc" style="width:100%;height:100%; borderRadius:20px;"> 
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="bottom">
            <a href="javascript::" class="page">
                点击查看更多... <span class="el-icon-arrow-right"></span>   
            </a>   
        </div>
        <div class="main">
            <div class="main_top">
                <h2>
                    <a href="javascript::">节日设计</a>
                </h2>
                <p>
                    <span class="el-icon-minus"></span>
                    ADVERTISING
                    <span class="el-icon-minus"></span>
                </p>
            </div>
            <div class="main_page">
                <div v-for="imgs in mainImg" :key="imgs.id" class="main_page_imgs">
                    <img class="main_page_img" src="imgs.imgSrc" alt="" style="width:100%;height:100%; borderRadius:20px;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"pageHome",
    data () {
        return {
            homeCar:[
                { id:1, carSrc:require("../../../assets/img1.jpg")},
                { id:2, carSrc:require("../../../assets/img2.jpg")},
                { id:3, carSrc:require("../../../assets/img3.jpg")},
                { id:4, carSrc:require("../../../assets/img4.jpg")},
                { id:5, carSrc:require("../../../assets/img5.jpg")},
                { id:6, carSrc:require("../../../assets/img6.jpg")}
            ],
            mainImg:[
                { id:1, imgSrc:require("../../../assets/img1.jpg")},
                { id:2, imgSrc:require("../../../assets/img2.jpg")},
                { id:3, imgSrc:require("../../../assets/img3.jpg")},
                { id:4, imgSrc:require("../../../assets/img4.jpg")},
                { id:5, imgSrc:require("../../../assets/img5.jpg")},
                { id:6, imgSrc:require("../../../assets/img6.jpg")}
            ]
        }
    }
}
</script>

<style>
    * {
        padding:0;
        margin:0;
        list-style:none;
        text-decoration: none;
    }
    html body {
        background-color: #f6f8f8;
    } 
    .home_wrap {
        width:1200px;
        margin:0 auto;
        position:relative;
    }
    .home_wrap .navTop {
        position:absolute;
        top:-180px;
        display: flex;
        width:1200px;
        height:45px;
        border-radius:30px 30px 0 0;
    }
    .home_wrap .navTop .item {
        width:134px !important;
    }
    .home_wrap .navTop .itemlift {
    border-radius:10px 0 0 0;
    }
    .home_wrap .navTop .itemright {
    border-radius:0 10px 0 0;
    }
    .home_wrap .home {
        position: absolute;
        top:-140px;
        width:1200px;
    }
    .home_wrap .home .homBunner {
        text-align: center;
        background-color:#3ec4f0;
    }
    .home_wrap .home .homeCard {
        border-radius: 15px;
        padding:auto 20px;
        background:url('../../../assets/bunner_bj.jpg');
        background-size:100% 100%;
    }
    .el-carousel__mask {
        border-radius: 20px;
    }
    .el-carousel__button {
        height:4px !important;
        background-color: #fff !important;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    }
    .home_wrap .bottom {
        width:100%;
        line-height: 70px;
        position: absolute;
        top:233px;
        text-align: center;
        background-color: #fff;
    }
    .home_wrap .bottom .page {
        color:#333;
    }
    .home_wrap .bottom .page:hover {
        color:#f98722;
        margin-right:4px;
    }
    .home_wrap .main {
        position: absolute;
        top:350px;
        width:100%;
        height:100px;
    }
    .home_wrap .main .main_top {
        display: inline-block;
        height:100%;
        width:100%;
        text-align: center;
        font-size:17px;
    }
    .home_wrap .main .main_top h2 a {
        color:#f6911e;
        line-height:30px;
    }
    .home_wrap .main .main_top h2 a:hover {
        color:#f7ad59;
    }
    .home_wrap .main .main_top p {
        margin-top:20px;
    }
    .home_wrap .main .main_page {
        height:500px;
    }
    .home_wrap .main .main_page .main_page_imgs {
        display: flex;
        width:100%;
    }
    .home_wrap .main .main_page .main_page_imgs .main_page_img {
        flex:1;
        border:1px solid black;
    }
</style>
