<template>
  <div id="app" class="app">
    <router-view name="layout">
      <router-view name="content"></router-view>
    </router-view>
  </div>
</template>

<style lang="less">
@import './app.less';
#app {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
