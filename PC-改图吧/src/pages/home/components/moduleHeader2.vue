<template>
    <div class="moduleHeader2">
        <div class="moduleHeader_top2">
            <h2>
                <a href="javascript::">{{title[1]}}</a>
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
    name:'moduleHeader',
    data() {
        return {
            title:[

                "节日设计",
                "党建活动",
                "电商淘宝",
                "活动海报",
                "办公文档",
                "插图配图",
            ]
        }
    }
}
</script>

<style>
    .moduleHeader2 {
        position: absolute;
        top:2510px;
        left:50%;
        margin-left:-600px;
        width:1200px;
        height:100px;
        background:#fff;
    }
    .moduleHeader2 .moduleHeader_top2 {
        display: inline-block;
        height:100%;
        width:100%;
        text-align: center;
        font-size:17px;
    }
    .moduleHeader2 .moduleHeader_top2 h2 a {
        color:#f6911e;
        line-height:30px;
    }
    .moduleHeader2 .moduleHeader_top2 h2 a:hover {
        color:#f7ad59;
    }
    .moduleHeader .moduleHeader_top2 p {
        margin-top:20px;
    }
    .moduleHeader2 .moduleHeader_page {
        height:500px;
    }
    .moduleHeader2 .moduleHeader_page .moduleHeader_page_imgs {
        display: flex;
        width:100%;
    }
    .moduleHeader2 .moduleHeader_page .moduleHeader_page_imgs .moduleHeader_page_img {
        flex:1;
        border:1px solid black;
    }
</style>

