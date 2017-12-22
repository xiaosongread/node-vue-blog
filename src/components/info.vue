<template>
  <div class="blog-cons">
    <v-info></v-info>
    <v-slider></v-slider>
  </div>
</template>

<style lang="scss" scoped>
  .blog-cons{
    width:1100px;
    margin: 30px auto 0;
    display: flex;
  }
</style>

<script>
import slider from './block/Slider'
import info from './block/articleInfo'
export default {
    data() {
      return {

      }
    },
    methods: {
      getData(){

      }
    },
    components: {
      'v-slider': slider,
      'v-info': info
    }
  }
</script>
