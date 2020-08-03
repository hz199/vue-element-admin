<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#515a6e"
    text-color="rgba(255, 255, 255, 0.65)"
    active-text-color="#fff"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item index="1-3">
        <i class="el-icon-location"></i>
         <span slot="title">选项3</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>
<style>
.el-menu-vertical .el-menu-item.is-active {
  background-color: #2c8be4 !important;
}
</style>