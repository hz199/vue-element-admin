<template>
  <div id="app">
    <router-view name="layout">
      <router-view name="content"></router-view>
    </router-view>
  </div>
</template>

<style lang="less">
@import './app.less';
#app {
  width: 100%;
}
</style>
