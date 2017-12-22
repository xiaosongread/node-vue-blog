import Vue from 'vue'
// import bus from '../../state'

// 面包屑导航
Vue.component('my-here', {
  template: `<el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="x in $route.matched" :key="x.title">{{x.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>`
})

