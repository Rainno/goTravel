<template>
  <div class="">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="weekendInfo in weekendList" :key="weekendInfo.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="weekendInfo.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{weekendInfo.title}}</p>
          <p class="item-desc">{{weekendInfo.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title{
    line-height: .8rem;
    background-color : #eee;
    text-indent : .2rem;
  }
  .item{
    .item-img-wrapper{
      overflow: hidden;
      height: 0;
      padding-bottom: 37.09%;
    }
    .item-img{
      width: 100%;
    }
    .item-info{
      padding: .1rem;
      .item-title{
        line-height : .54rem;
        font-size: .32rem;
        ellipsis();
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
        ellipsis();
      }
    }
  }
</style>
