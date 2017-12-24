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
    <v-edit></v-edit>
  </div>
</template>
<style scoped>
.animated{animation-duration: 0.5s;}
</style>
<script>
import header from '@/components/block/Header'
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
  }
}
</script>

<style lang="scss">
@import '../../assets/app/css/app.scss'
</style>
