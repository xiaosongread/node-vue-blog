<template>
  <div>
    <div class="header-1">
      <div class="header-box">
        <ul class="header-bar">
          <li>js静态资源</li>
          <li>参考书</li>
          <li>视频</li>
          <li>在线手册</li>
        </ul>
      </div>
    </div>
    <div class="header-2">
      <div class="header-box">
        <div class="header-nav">
          <div class="logo">
            <img src="../../assets/logo-default-white.png" alt="">
          </div>
          <ul class="nav-bar">
            <a :href="'/' + navItem.name + '?id=' + navItem._id" v-for="navItem in navData"><li>{{navItem.name}}</li></a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-1{
  background:#000000;
  border-bottom: 1px solid #212121;
  height:30px;
  .header-box{
    width:1100px;
    height:30px;
    margin:0 auto;
    position: relative;
    .header-bar{
      width:300px;
      display:flex;
      line-height:30px;
      font-size:12px;
      text-align:center;
      color:#ffffff;
      position: absolute;
      right:0;
      li{
        flex:1;
      }
    }
  }
}
.header-2{
  background:#000000;
  .header-box{
    width:1100px;
    height:80px;
    margin:0 auto;
    position: relative;
    .header-nav{
      width:100%;
      display: flex;
      justify-content:space-between;
      line-height:80px;
      position: absolute;
      top:0px;
      left:0;
      .logo{
        width:50px;
        height:80px;
        display: flex;
        align-items: center;
        img{
          width:50px;
          height:50px;
        }
      }
      .nav-bar{
        width:400px;
        display:flex;
        font-size:20px;
        font-weight: 500;
        color:#9d9d9d;
        cursor: pointer;
        a{
          flex:1;
          text-align:center;
        }
        a:hover{
          color: #ffffff;
        }
      }
    }
  }
}
</style>
<script>
  export default {
    data() {
      return {
        navData:[]
      };
    },
    watch:{
      $route(a){
        console.log("路由变化：",a)
      }
    },
    created(){
      console.log(this.$route.path)
      this.getData()
    },
    methods: {
      getData(){
        var _this = this;
        this.$http.post('categories')
          .then(function (res) {
            console.log("顶部数据",res)
            _this.navData = res.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
