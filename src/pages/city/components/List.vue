<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="hotCity in hotCities" :key="hotCity.id">
              <div class="button">{{hotCity.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) in cities" :key="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  data () {
    return {}
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list{
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area{
    .border-topbottom{
      &:before{
        border-color: #ccc;
      }
      &:after{
         border-color: #ccc;
       }
    }
    .title {
      line-height: .54rem;
      background-color: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }
    .button-list{
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .button-wrapper{
        width: 33.33%;
        float: left;
        .button{
          text-align: center;
          padding: .1rem 0;
          margin: .1rem;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }
    .item-list{
      .item{
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
      }
      .border-bottom{
        &:before {
          border-color: #ccc;
        }
      }
    }
  }
}
</style>
