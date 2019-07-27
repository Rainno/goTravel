<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img
          class="banner-img"
          :src="bannerImg"
          alt=""
        >
        <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe889;</span>
            {{this.gallaryImgs.length}}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs="gallaryImgs"
          v-show="showGallary"
          @close="handleGallaryClose"
        ></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary.vue'
import FadeAnimation from '../../../common/fade/FadeAnimation.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClose: function () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner{
  position: relative;
  color: #fff;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    background-image: linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8));
    .banner-title{
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    .banner-number{
      margin-top: .2rem;
      padding: 0 .14rem;
      line-height: .32rem;
      height: .32rem;
      border-radius: .2rem;
      background: rgba(0,0,0,.8);
      font-size: .24rem;
      .banner-icon{
        font-size: .24rem;
      }
    }
  }
}
</style>
