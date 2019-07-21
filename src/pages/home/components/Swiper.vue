<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="swiperIcon in swiperList" :key="swiperIcon.id">
        <img class="swiper-img" :src="swiperIcon.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
//  >>>样式穿透，使之不受scoped的限制
.wrapper >>> .swiper-pagination-bullet-active{
  background-color: #fff;
}
.wrapper{
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background-color: #eee;
  .swiper-img{
    width: 100%;
  }
}
</style>
