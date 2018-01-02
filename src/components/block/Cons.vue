<template>
  <div class="cons">
    <ul>
      <li v-for="item in listData">
        <a :href="'/article/info' + '?id=' + item._id">
          <h4>{{item.title}}</h4>
          <div class="articleIntroduce">
            <div class="date"><span><i class="iconfont">&#xe60a;</i></span>{{(item.startTime).substring(0,10)}}</div>
            <div class="views"><span><i class="iconfont">&#xe614;</i></span>{{item.category.tag}}</div>
            <div class="views"><span><i class="iconfont">&#xe6c0;</i></span>{{item.views}}</div>
          </div>
          <p class="lookIntroduce">{{item.description}}</p>
        </a>
      </li>
    </ul>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<style lang="scss">
  .cons{
    .block{
      display: flex;
      justify-content: center;
      .el-pagination{
        display: inline-block;
      }
    }
    .number{
      border:1px solid #999999 !important;
      border-radius: 3px;
      margin:2px;
    }
    .number.active{
      border: 1px solid #409EFF !important;
    }
  }
</style>
<style lang="scss" scoped>
.cons{
  width:730px;
  border-radius: 5px;
  margin-right:30px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
  ul{
    li{
      border-bottom:1px solid #dddddd;
      h4{
        padding: 10px 15px;
        margin:0;
        font-size: 24px;
        font-weight: bold;
        line-height: 40px;

      }
      .articleIntroduce{
        display: flex;
        font-size:12px;
        color: #c2c2c2;
        padding: 0 15px;
        .views{
          margin-left:15px;
        }
        .iconfont{
          font-size: 12px;
          margin-right: 5px;
        }
      }
      .lookIntroduce{
        max-height:62px;
        line-height:23px;
        padding: 10px 15px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    li:hover{
      background: #f9f9f9;
    }
  }
  .block{
    margin: 30px 0;

  }
  .number{
    border:1px solid #dddddd;
    border-radius: 3px;
    display: inline-block;
  }

}
</style>
<script>
  import bus from '../../state'
  export default {
    data() {
      return {
        url:'',
        listData:[],
        page: 1,
        total:0
      };
    },
    created(){
      console.log("当前列表的栏目：",this.$route.query)
      if(this.$route.path == '/' || this.$route.path == '/index'){ // 首页
        this.url = 'contentList'
      } else { // 分类页
        console.log('123',this.$route)
        this.url = 'categoryListContent'
      }
      this.getData()
    },
    watch:{
      page(){
        if(this.$route.path == '/' || this.$route.path == '/index'){ //
          this.url = 'contentList'
        } else { // 不是首页
          console.log('qweqweqwe:',_this.$route)
          this.url = 'categoryListContent'
        }
        this.getData()
      }
    },
    methods: {
      getData(){
        var _this = this;
        this.$http.get(_this.url,{
          params:{
            size:10,
            page:_this.page,
            id:_this.$route.query.id || ''
          }

        })
          .then(function (res) {
            console.log("列表数据",res)
            _this.listData = res.data.data;
            _this.total = res.data.count
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page = val;
      }
    }
  }
</script>
