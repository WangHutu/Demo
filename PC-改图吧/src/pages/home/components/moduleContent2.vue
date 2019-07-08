<template>
    <div class="moduleContent2">
        <div class="contentMain">
            <!-- <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="6"> -->
                <div class="pic" v-for="item in theme" :key="item.id">
                    <img class="img" :src="item.imgSrc" alt="">
                    <p> {{item.name}} </p>
                </div>
            <!-- </el-col> -->
        </div>
        <div class="moduleBottom">
            <a href="javascript::" class="bottom">
                点击查看更多... <span class="el-icon-arrow-right"></span>   
            </a>   
        </div>
    </div>
</template>

<script>
export default {
    name:'moduleContent',
    data() {
        return {
            theme:[
                { id:1, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:2, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:3, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:4, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:5, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:6, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:7, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:8, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:9, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:10, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:11, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")},
                { id:12, name:'绿野仙踪',imgSrc:require("../../../assets/theme2.png")}
            ]
        }
    }
}
</script>

<style>
    .moduleContent2 {
        width:1200px;
        position: absolute;
        top:2610px;
        left:50%;
        margin-left:-600px;
        background-color:#fff;
    }
    .moduleContent2 .contentMain {
        width:1200px;
        flex-wrap:wrap;
    }
    .moduleContent2 .contentMain .pic {
        display: inline-block;
        width:289px;
        text-align:center;
        background-color:#e9e9e9;
        border-radius:10px;
        margin:10px 13px 10px 0;
    }
    .moduleContent2 .contentMain :nth-child(4n+0) {
        margin:10px 0;
    }
    .moduleContent2 .contentMain .pic .img {
        width:85%;
        margin:20px 0;
    }
    .moduleContent2 .contentMain .pic p {
        line-height:10px;
        height: 30px;
    }
    .moduleBottom {
        width:100%;
        line-height: 70px;
        text-align: center;
    }
    .moduleBottom .bottom {
        color:#333;
    }
    .moduleBottom .bottom:hover {
        color:#f98722;
        margin-right:4px;
    }

</style>


