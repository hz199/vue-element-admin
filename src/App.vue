<template>
  <div id="app" class="app">
    <router-view></router-view>

    <el-backtop target=".app"></el-backtop>
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
