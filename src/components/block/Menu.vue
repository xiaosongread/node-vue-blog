<template>
    <div class="aside-wrap">
        <div class="logo"><router-link to="/">营销系统</router-link></div>
        <div class="menu-wrap">
            <el-menu :default-active="menuActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened background-color="#324157" text-color="#B4BCCC" active-text-color="#fff" style="border-right:0" router>

                <el-submenu :index="value.index" v-for="(value, key) in navData" :key="key">
                    <template slot="title">
                        <i :class="value.icon"></i>
                        <span slot="title" v-text="value.group"></span>
                    </template>
                    <el-menu-item :index="value.index" v-for="(value, key) in value.list" :key="key" :route="{path:value.href}">{{value.name}}</el-menu-item>
                </el-submenu>

            </el-menu>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navData:[
            {
              icon:'el-icon-menu',
              group:'公司管理',
              index:'1',
              list:[
                {
                  href:'/company/department',
                  name:'管理部门',
                  index:'1-1'
                },
                {
                  href:'/company/staff',
                  name:'管理员工',
                  index:'1-2'
                },
                {
                  href:'/company/accounts',
                  name:'管理帐号',
                  index:'1-3'
                }
              ]
            },
            {
              icon:'el-icon-menu',
              group:'活动管理',
              index:'2',
              list:[
                {
                  href:'/activity/invitation',
                  name:'邀请加入',
                  index:'2-1'
                },
                {
                  href:'/activity/setrules',
                  name:'设置规则',
                  index:'2-2'
                },
                {
                  href:'/activity/explain',
                  name:'权益说明',
                  index:'2-3'
                }
              ]
            },
            {
              icon:'el-icon-menu',
              group:'粉丝管理',
              index:'3',
              list:[
                {
                  href:'/fans/fanslist',
                  name:'粉丝管理',
                  index:'3-1'
                }
              ]
            },
            {
              icon:'el-icon-menu',
              group:'线索管理',
              index:'4',
              list:[
                {
                  href:'/clue/cluelist',
                  name:'线索管理',
                  index:'4-1'
                }
              ]
            },
            {
              icon:'el-icon-menu',
              group:'营销管理',
              index:'5',
              list:[
                {
                  href:'/marketing/special',
                  name:'活动专题',
                  index:'5-1'
                },
                {
                  href:'/marketing/dynamic',
                  name:'实时动态',
                  index:'5-2'
                },
                {
                  href:'/marketing/case',
                  name:'家装案例',
                  index:'5-3'
                },
                {
                  href:'/marketing/news',
                  name:'热点资讯',
                  index:'5-4'
                }
              ]
            },
            {
              icon:'el-icon-menu',
              group:'模板',
              index:'6',
              list:[
                {
                  href:'/moban/list',
                  name:'列表',
                  index:'6-1'
                },
                {
                  href:'/moban/Form',
                  name:'表单',
                  index:'6-2'
                }
              ]
            }
        ],
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
        menuActive() {
          return this.$route.meta.index
        }
    }
  }
</script>
