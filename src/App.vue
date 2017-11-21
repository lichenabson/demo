<template>
  <div class="app-main">
    <!--<div>
      顶部顶部顶部
    </div>
    <div id="app12">
      <router-view ref="editUser"></router-view>
    </div>-->
    <el-container style="height: 100%">
      <el-aside style="width: 250px;height: 100%">
          <el-row style="height: 100%">
            <el-col :span="24" style="height: 100%">
              <el-menu default-active="/" class="el-menu-vertical-demo"
                       background-color="#363e4f"
                       text-color="#c9cbd0"
                       active-text-color="#2d8cf0" style="border-right: none;height: 100%" :router=true>
                <div style="height: 50px"></div>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-submenu index="1-4">
                    <template slot="title">
                      <i class="el-icon-setting"></i>
                      选项4
                    </template>
                    <el-menu-item index="/dashboard"> <i class="el-icon-menu"></i>选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="/test" >
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="/organization" >
                  <i class="el-icon-setting"></i>
                  <span slot="title">机构管理</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <el-row>
            <el-col :span="24" style="height: 60px;background-color: white;"></el-col>
          </el-row>
        </el-header>
        <el-main>
          <div>
            <router-view ref="editUser"></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style >
  body{
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  .app-main {
    width: 100%;
    height: 100%;
  }
  .el-menu{
    height: 100%;
  }
</style>
