<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img
            class="gallary-img"
            :src="item"
            alt="图片不能加载"
          >
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
        loop: true
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container {
     overflow : inherit
  }
  .container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000;
  color: #fff;
  .wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-img{
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
