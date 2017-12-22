<template>
  <div class="cons" v-html="infoData">

  </div>
</template>

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
        color: #d4d4d4;
        padding: 0 15px;
        .date{

        }
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
            _this.infoData = res.data.data[0].content;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
