<template>
  <div id="app">
    <!--显示当前路由对应显示的组件,router:./router/index.js中去找-->
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

import router from './router/index.js'

export default {
  name: 'App',
  router
}
</script>

<style>
#app {
}
</style>
