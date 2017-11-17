<template xmlns="">
 <div>
   <el-steps :space="200" :active="1" finish-status="success">
     <el-step title="已完成"></el-step>
     <el-step title="进行中"></el-step>
     <el-step title="步骤 3"></el-step>
   </el-steps>
   <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
     <el-dropdown-menu slot="dropdown">
       <el-dropdown-item>黄金糕</el-dropdown-item>
       <el-dropdown-item>狮子头</el-dropdown-item>
       <el-dropdown-item>螺蛳粉</el-dropdown-item>
       <el-dropdown-item disabled>双皮奶</el-dropdown-item>
       <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
     </el-dropdown-menu>
   </el-dropdown>
   <el-table
     :data="tableData"
     style="width: 100%">
     <el-table-column
       prop="date"
       label="日期"
       width="180">
     </el-table-column>
     <el-table-column
       prop="name"
       label="姓名"
       width="180">
     </el-table-column>
     <el-table-column
       prop="address"
       label="地址">
     </el-table-column>
   </el-table>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
