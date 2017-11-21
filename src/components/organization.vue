<template>
  <div class="organization-wrapper">
    <el-row>
      <el-col :span="6">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="18" class="organization-id">
        <el-row>
          <label>机构id:</label>
          <el-input
            placeholder="机构id"
            v-model="organizationId"
            :disabled="true">
          </el-input>
        </el-row>
        <el-row>
          <label>机构名称:</label>
          <el-input
            placeholder="机构名称"
            v-model="organizationName"
            :disabled="true" style="width: 350px">
          </el-input>
        </el-row>
        <el-row>
          <label> 联系人:</label>
          <el-input
            placeholder="联系人"
            v-model="contact"
            :disabled="true">
          </el-input>
        </el-row>
        <el-row>
          <label> 联系电话:</label>
          <el-input
            placeholder="联系电话"
            v-model="telephone"
            :disabled="true">
            <el-button slot="prepend" icon="el-icon-phone"></el-button>
          </el-input>
        </el-row>
        <el-row>
          <label> 机构地址:</label>
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 10}"
            placeholder="机构地址"
            v-model="address"
            :disabled="true">
          </el-input>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [{
          label: '一级 机构',
          children: [{
            label: '二级机构 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        organizationId: '',
        organizationName: '南京啊大厦大厦的',
        address: '拉力赛的拉力赛都拉上了达拉斯的拉升了达拉斯的拉升了达拉拉上了达拉斯的拉升了达拉斯的拉升了拉上了达拉斯的拉升了达拉斯的拉升了斯了大',
        contact: '军区管理员',
        telephone: '18115185660'
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }
</script>

<style>
  .organization-id .el-row{
    margin-bottom: 15px;
  }
  .organization-id .el-input-group__prepend{
    padding: 0 9px;
  }
  .organization-id label{
    width: 80px;
    display: inline-block;
    vertical-align: middle;
  }
  .organization-id .el-input,.organization-id .el-textarea{
    width: 200px;
    margin-left: 15px;
  }
  .organization-id .el-textarea{
    width: 600px;
  }
</style>

