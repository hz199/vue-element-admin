<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical"
    :collapse="getSliderCollapse"
    background-color="#515a6e"
    text-color="rgba(255, 255, 255, 0.65)"
    active-text-color="#fff"
  >
    <div class="logo">logo</div>

    <!-- <template v-for="item in routesConfig">
      item
    </template> -->

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item index="1-3">
        <i class="el-icon-location"></i>
         <span slot="title">选项3</span>
      </el-menu-item>
      <el-menu-item index="1-6">
        <i class="el-icon-location"></i>
         <span slot="title">选项6</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
import { routes } from '@/router/config'

export default {
  data() {
    return {
      routesConfig: []
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse'
    ])
  },
  methods: {
  },
  created () {
    this.routesConfig = Object.freeze(routes)
    console.log(routes)
  }
}
</script>
<style lang="less" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu-vertical .el-menu-item.is-active {
  background-color: #2c8be4 !important;
}
.logo {
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: #fff;
}
</style>
