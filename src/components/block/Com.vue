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
import edit from '@/components/block/EditPassword'
import menu from '@/components/block/Menu'
import bus from '../../state'
export default {
  data(){
    return {
      asideFolded: true
    }
  },
  created(){
      var _self = this;
      bus.$on('asideToggle', function (asideFolded) {
          _self.asideFolded = asideFolded;
      })
  },
  components: {
    'v-header': header,
    'v-menu': menu,
    'v-edit': edit
  }
}
</script>

<style lang="scss">
@import '../../assets/app/css/app.scss'
</style>
