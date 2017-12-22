<template>
  <div class="list-box">
    <div class="list-body">
      <div class="list-header">
        <el-form :inline="true" :model="query" size="medium">
          <el-form-item label="案例名称">
            <el-input v-model="query.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="省/市/区：">
            <el-form-item prop="province" style="width: 150px;">
              <el-select v-model="query.province" placeholder="请选择省">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="city" style="width: 150px;">
              <el-select v-model="query.city" placeholder="请选择市">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form-item>
          <el-form-item label="设计师">
            <el-select v-model="query.aa" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="户型">
            <el-select v-model="query.bb" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search" :loading="loading">查询</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus" title="新增" size="mini" style="margin:0 0 15px 0;">添加案例</el-button>
      </div>

      <el-table
        :data="data.list"
        style="width: 100%"
        size="mini"
        :default-sort = "{prop: 'id', order: 'descending'}"
      >
        <el-table-column
          prop="id"
          label="ID"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="文章标题"
          sortable
          width="300">
        </el-table-column>
        <el-table-column
          prop="modi_date"
          label="编辑时间">
        </el-table-column>
        <el-table-column
          prop="add_date"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="addeditor"
          label="添加人">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" title="编辑" size="mini">编辑</el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" title="删除" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <div class="list-footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="query.page"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="query.page_size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import route from '../router/index'
  import {created, methods} from '../mixins/index'
  export default {
    data() {
      return {
        data:{},
        loading:false,

        query:{
            column_id:0,
            page:1,
            page_size:20
        },

        options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    mixins: [created, methods],
    methods: {
      getData(){
        var _self = this;
        this.$http.get('story/list', {
                params: _self.query
            })
            .then(function (res) {
                console.log(res);
                _self.data = res.data.data || {total:1}
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      // 编辑
      handleEdit(id){
        route.push({ path: '/form',query:{id:id}})
      },
      // 删除
      handleDelete(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
      },

      onSubmit() {
        var _self = this;
        this.loading = true;
        setTimeout(function(){
          _self.loading = false;
        },1000)
      }
    }
  }
</script>

