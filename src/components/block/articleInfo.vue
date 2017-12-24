<template>
<div class="articleInfo">
  <div class="articleTit">
    <h3>{{infoData.title}}</h3>
  </div>
  <div class="articleintro">
    <div class="createdDate"><span><i class="iconfont">&#xe60a;</i></span>{{(infoData.startTime).substring(0,10)}}</div>
    <div class="views"><span><i class="iconfont">&#xe6c0;</i></span>{{infoData.views}}</div>
  </div>
  <div class="articleforeword">
    <h5>前言</h5>
    <p>{{infoData.description}}</p>
  </div>
  <div class="cons" v-html="infoData.content"></div>
</div>
</template>
<style>
  pre{
    padding: 10px;
    background: #F0F0F0;
    color: #000;
    border: 1px solid #ddd;
    border-left: 2px solid #1b58b8;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
  table {
    margin-bottom: 15px;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      font-size: inherit;
  }
  tr {
    border: 1px solid #ddd;
    height: 40px;
    line-height: 40px;
  }
  tr td {
    border-right: 1px solid #ddd;
    text-align: center;
  }
  p{
    padding: 5px;
    img{
      max-width: 95%;
      display:inline-block;
    }
    hr {
      height: 1px !important;
      border: none !important;
      border-top: 1px dashed #ddd !important;
    }
  }
  img{
    max-width:95%;
  }

</style>
<style lang="scss" scoped>
.articleInfo{
  background: #ffffff;
  width:730px;
  border-radius: 5px;
  margin-right:30px;
  background: #ffffff;
  padding:15px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
  .iconfont{
    font-size: 12px;
    margin-right: 5px;
  }
  .views{
    margin-left:10px;
  }
  .articleTit{
    h3{
      font-size:24px;
      margin:0;
    }
  }
  .articleintro{
    display:flex;
    font-size:12px;
    padding:15px 0;
    color: #c2c2c2;
    border-bottom: 1px dashed #c2c2c2;
  }
  .articleforeword{
    padding:20px 0;
    border-bottom: 1px dashed #c2c2c2;
    h5{
      font-weight: 500;
      font-size: 18px;
    }
  }
  .cons{
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
          color: #d4d4d4;
          padding: 0 15px;

        }
        .lookIntroduce{
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
  }

}

</style>
<script>
  import bus from '../../state'
  export default {
    data() {
      return {
        infoData:''
      };
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        var _this = this;
        this.$http.get('content/nowContentInfo?contentId='+_this.$route.query.id)
          .then(function (res) {
            _this.infoData = res.data.data[0];
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
