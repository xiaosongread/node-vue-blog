<template>
  <div>
    <v-header></v-header>
    <div>
      <div class="wrapper">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>
<style scoped>
.animated{animation-duration: 0.5s;}
</style>
<script>
import header from '@/components/block/Header'
import bottom from '@/components/block/Bottom'
export default {
  data(){
    return {
      asideFolded: true
    }
  },
  created(){

  },
  components: {
    'v-header': header,
    'v-bottom': bottom
  }
}
</script>

<style lang="scss">
@import '../../assets/app/css/app.scss'
</style>
