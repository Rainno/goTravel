<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header{
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  color:#fff;
  .header-left{
    width: 0.64rem;
    folat: left;
    .back-icon{
      text-align center;
      font-size: .4rem;
    }
  }
  .header-input{
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align center;
    color: #fff;
    .arrow-icon{
      margin-left:-.04rem;
      font-size 0.24rem;
    }
  }
}
</style>
