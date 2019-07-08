<template>
    <div class="moduleHeader" :class="typec">
        <div class="moduleHeader_top">
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
    name:'moduleHeader',
    data() {
        return {
            
        }
    },
    props:['typec','title']
}
</script>

<style>
    .moduleHeader {
        margin:0 auto;
        width:1200px;
        height:100px;
    }
    .moduleHeader .moduleHeader_top {
        display: inline-block;
        height:100%;
        width:100%;
        text-align: center;
        font-size:17px;
    }
    .moduleHeader .moduleHeader_top h2 a {
        color:#f6911e;
        line-height:30px;
    }
    .moduleHeader .moduleHeader_top h2 a:hover {
        color:#f7ad59;
    }
    .moduleHeader .moduleHeader_top p {
        margin-top:20px;
    }
    .moduleHeader .moduleHeader_page {
        height:500px;
    }
    .moduleHeader .moduleHeader_page .moduleHeader_page_imgs {
        display: flex;
        width:100%;
    }
    .moduleHeader .moduleHeader_page .moduleHeader_page_imgs .moduleHeader_page_img {
        flex:1;
        border:1px solid black;
    }
</style>

