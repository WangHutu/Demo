<template>
  <ul class="pageBox">
    <li class="homePage" @click="moveCursor('home')">首页</li>
    <li class="lastPage" @click="moveCursor('last')">
      <i class="el-icon-arrow-left"></i>
    </li>
    <ul v-show="pagenum" v-html="msg" style="padding:0;">{{msg}}</ul>
    <li class="nextPage" @click="moveCursor('next')">
      <i class="el-icon-arrow-right"></i>
    </li>
    <li class="endPage" @click="moveCursor('end')">尾页</li>
  </ul>
</template>
<script>
import { setTimeout } from 'timers'
export default {
  name: 'page',
  data () {
    return {
      page: 0,
      cursor: null,
      cursors: [],
      msg: '',
      pagenum: false
    }
  },
  props: {
    pages: {
      type: Number
    }
  },
  methods: {
    addClass: function (n) {
      this.page = n
      setTimeout(() => {
        var index = this.cursors.indexOf(n) + 1 ? this.cursors.indexOf(n) : n
        if (this.items) {
          this.items.forEach((item, i) => {
            if (i === index) {
              item.setAttribute('class', 'lab')
            } else {
              item.removeAttribute('class')
            }
          })
        }
        this.$emit('gotoPage', this.page)
      }, 0)
    },
    moveCursor: function (str) {
      switch (str) {
        case 'home':
          this.page = 0
          break
        case 'last':
          this.page - 1 < 0 ? (this.page = 0) : (this.page -= 1)
          break
        case 'next':
          this.page + 1 > this.pages - 1
            ? (this.page = this.pages - 1)
            : (this.page += 1)
          break
        case 'end':
          this.page = this.pages - 1
          break
        default:
          return
      }
      this.addClass(this.page)
    },
    createPage: function () {
      var arr = []
      var n = this.page
      var nEnd = this.pages - 1
      arr.push(n)
      n - 2 < 0 ? arr.push(n + 3) : arr.push(n - 2)
      n - 1 < 0 ? arr.push(n + 4) : arr.push(n - 1)
      n + 2 > nEnd ? arr.push(n - 3) : arr.push(n + 2)
      n + 1 > nEnd ? arr.push(n - 4) : arr.push(n + 1)
      arr.sort(function (a, b) {
        return a - b
      })
      this.cursor = arr[0]
      this.cursors = arr
      return true
    }
  },
  mounted: function () {
    // 请求数据：获取页数
    // this.$axios.get('http://127.0.0.1:8080/')
    // .then(res => {
    //   console.log(res)
    // 把页面值获取到。然后循环。生成对应的dom元素插入到 refs.pagenum中
    var n = 3 // 把获取到的页数赋值给n
    this.pagenum = true
    for (var i = 0; i < n; i++) {
      this.msg = this.msg + '<li>' + (i + 1) + '</li>'
    }
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }
}
</script>
<style>
.pageBox {
  display: flex;
  justify-content: center;
  margin: 1em 0;
}

.pageBox li {
  float: left;
  padding: 0.3em 1em;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0.2em;
  color: #666;
  cursor: pointer;
  margin: 0 0.5em;
  list-style: none;
}
.pageBox .page > li {
  padding-top: 0.5em;
}
.pageBox li:hover {
  background: #37ab2a;
  color: #fff;
}
.pageBox .page li[class="lab"] {
  background: #37ab2a;
  color: #fff;
}
@media (max-width: 479px) {
  .pageBox .page {
    display: none;
  }
}
</style>
