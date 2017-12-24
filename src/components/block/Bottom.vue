<template>
  <div class="bottombar">
    <div class="bottombox">
      <p>Copyright © Aaron All Rights Reserved 京ICP备17007771号-1</p>
      <p class="mi">逆水行舟，不进则退 -- 小宋</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottombar{
  padding:0 100px;
  line-height: 30px;
  font-size:16px;
  margin-top:40px;
  background-color: #000;
  border-bottom: 1px solid #212121;
  font-size: 14px;
  color: #939393;
  .bottombox{
    width:1100px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    .mi{
      color: #337ab7;
    }
  }
}
</style>
<script>
  import bus from '../../state'
  export default {
    data() {
      return {

      };
    },
    created(){

    },
    methods: {

    }
  }
</script>
