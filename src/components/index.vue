<template>
  <div class="blog-cons">
    <v-cons></v-cons>
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
import cons from './block/Cons'
export default {
    data() {
      return {
        loading:false,
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      'v-slider': slider,
      'v-cons': cons
    }
  }
</script>
