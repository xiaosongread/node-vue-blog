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
            <img src="../../assets/logo.png" alt="">
          </div>
          <ul class="nav-bar">
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>react</li>
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
        li{
          flex:1;
          text-align:center;
        }
        li:hover{
          color: #ffffff;
        }
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
        activeIndex: '1',
        activeIndex2: '1',
        asideFolded:true,
        editShow: false,
      };
    },
    created(){
      this.checkWidth();
      window.onresize=this.checkWidth;
    },
    methods: {
      editPassword(){
        this.editShow = true;
        bus.$emit('editShow',this.editShow);
      },
      checkWidth:function(){
        if(window.innerWidth>500){
          this.asideFolded = false;
          bus.$emit('asideToggle', false);
        }else{
          this.asideFolded = true;
          bus.$emit('asideToggle', true);
        }
      },
      asideToggle(){
        this.asideFolded = !this.asideFolded;
        bus.$emit('asideToggle', this.asideFolded);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
