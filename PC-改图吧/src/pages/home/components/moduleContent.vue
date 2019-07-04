<template>
    <div class="moduleContent">
        <div class="contentMain">
            <div class="pic" v-for="item in theme" :key="item.id">
                <img class="img" :src="item.imgSrc" alt="">
                <p> {{item.name}} </p>
            </div>
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
                { id:1, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:2, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:3, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:4, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:5, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:6, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:7, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:8, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:9, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:10, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:11, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")},
                { id:12, name:'夜景摩天轮',imgSrc:require("../../../assets/theme.png")}
            ]
        }
    }
}
</script>

<style>
    .moduleContent {
        width:1200px;
        position: absolute;
        top:992px;
        left:50%;
        margin-left:-600px;
    }
    .moduleContent .contentMain {
        display: flex;
        width:1200px;
        height:1150px;
        flex-wrap:wrap;
        justify-content: space-around;
    }
    .moduleContent .contentMain .pic {
        display: inline-block;
        width:280px;
    }


</style>


