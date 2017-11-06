<template>
  <div>
    <div>
      test页面
    </div>
    <div>
      <ul>
        <li v-for="item in data" :title=item.sex>{{item.name+item.sex}} <i style="color: red;text-decoration: underline;" @click="delete1(item.name)">删除</i></li>
      </ul>
      <button @click="say">点击增加</button>
      <button @click="sendXHR">重新发送请求</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  let vm = {
    name: 'test',
    data () {
      return {
        message: 'hello',
        data: []
      }
    },
    methods: {
      say: function () {
        this.data.push({name: '草莓', sex: '女'})
      },
      delete1: function (name) {
        let data = this.data
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            if (data[i].name === name) {
              data.splice(i * 1, 1)
              return ''
            }
          }
        }
      },
      sendXHR: function () {
        let _this = this
        axios.get('/getData').then(function (res) {
          console.log(res)
          _this.data = res.data
        }, function (res) {
          console.log(res)
        })
      }
    },
    created: function () {
      this.sendXHR()
    }
  }
  export default vm
</script>

<style scoped>

</style>
