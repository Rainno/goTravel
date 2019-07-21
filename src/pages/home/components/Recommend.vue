<template>
    <div class="">
     <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="recommendInfo in recommendList" :key="recommendInfo.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="recommendInfo.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{recommendInfo.title}}</p>
            <p class="item-desc">{{recommendInfo.desc}}</p>
            <p class="item-button">查看详情</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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
  margin-top : .2rem;
  line-height: .8rem;
  background-color : #eee;
  text-indent : .2rem;
}
.item{
  display : flex;
  height: 1.9rem;
  overflow : hidden;
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
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
    .item-button{
      margin-top: .16rem;
      width: 1.2rem;
      background-color: #ff9300;
      padding: 0 .2rem;
      border-radius : .06rem;
      color : #fff;
      line-height: .44rem;
      text-align : center;
    }
  }
}
</style>
