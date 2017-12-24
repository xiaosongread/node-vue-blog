<template>
  <div class="rightSlider">
    <div class="aboutMe">
      <h3><span><i class="iconfont">&#xe620;</i></span>关于抿格斗</h3>
      <p>小宋 博客，是抿圪斗个人技术博客，主要记录和总结前端工作中常用的知识。本博客所有内容若需转载请联系我。</p>
      <p>QQ群：432320002</p>
      <ul>
        <li>
          <img src="../../assets/QQ.png" alt="">
        </li>
        <li>
          <img src="../../assets/wechat.png" alt="" @click="clickWechatFn">
        </li>
        <li>
          <img src="../../assets/github.png" alt="">
        </li>
        <li>
          <img src="../../assets/wechatpbulic.png" alt="" @click="clickWechatpbulicFn">
        </li>
      </ul>
    </div>
    <div class="hotArticle">
      <h3><span><i class="iconfont">&#xe605;</i></span>站内消息</h3>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(banneritem,index) in bannerData" :key="index">
          <a :href="banneritem.bannerhref"><img :src="banneritem.imagePath"></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hotArticle">
      <h3><span><i class="iconfont">&#xe61e;</i></span>热点文章</h3>
      <ul>
        <template v-for="hotItem in hotArtDate">
          <li><a :href="'/article/info?id='+hotItem._id">{{hotItem.title}}</a></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rightSlider{
  width:330px;
  height:400px;
  .iconfont{
    margin-right: 10px;
  }
  h3{
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    padding: 0 10px;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }
  .aboutMe{
    width:100%;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
    p{
      line-height: 20px;
      padding: 10px;
    }
    ul{
      display: flex;
      padding: 10px;
      border-top: 1px dashed #dddddd;
      li{
        flex:1;
        img{
          width:77px;
        }
      }
    }
  }
  .hotArticle{
    width:100%;
    border-radius: 5px;
    margin-top:30px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
    overflow: hidden;
    ul{
      padding: 10px;
      li{
        line-height:30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li:hover{
        color:#337ab7;
        text-decoration:underline
      }
    }
  }
}
</style>
<script>
  import bus from '../../state'
  export default {
    data() {
      return {
        hotArtDate: [],
        bannerData:[],
        wechatUrl:"../../assets/wechat.png",
        wechatpbulic:'../../assets/wechatpbulic.png'
      };
    },
    created(){
      this.getDate()
      this.getBanner()
    },
    mounted(){

    },
    methods: {
      getDate(){
        var _this = this;
        this.$http.post('content/hotContents')
          .then(function (res) {
            _this.hotArtDate = res.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getBanner(){
        var _this = this;
        this.$http.post('banner')
          .then(function (res) {
            _this.bannerData = res.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      clickWechatFn(){
        this.wechatUrl = '../../assets/wechat.png'
      },
      clickWechatpbulicFn(){

      }
    }
  }
</script>
