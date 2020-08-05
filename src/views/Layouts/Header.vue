<template>
  <header class="header clearfix">
    <!-- 菜单icon -->
    <div class="pull-left header-menu-icon">
      <i :class="getSliderCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleHeaderMenuClick"></i>
    </div>
    <!--  面包屑 -->
    <el-breadcrumb class="breadcrumb-wrapper">
      <el-breadcrumb-item 
        v-for="item in getBreadcrumb"
        :key="item.path"
        :to="item.url"
      >
        <i :class="item.icon"></i>
        {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 右侧导航 -->
    <div class="right-nav pull-right">
      <el-dropdown class="dropdown">
        <el-avatar class="avatar" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'getSliderCollapse',
      'getBreadcrumb'
    ])
  },
  methods: {
    ...mapMutations([
      'setSliderCollapse'
    ]),
    handleHeaderMenuClick () {
      this.setSliderCollapse()
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 64px;
  line-height: 64px;
  background: #fff;
  box-shadow: 0 0 20px 0px rgba(0,0,0,.2);
  // position: fixed;
  width: 100%;
}
.breadcrumb-wrapper {
  line-height: 64px;
  float: left;
}
.header-menu-icon {
  cursor: pointer;
  font-size: 22px;
  padding: 0 20px;
  color: #606266;
}

.right-nav {
  line-height: 64px;
  padding-right: 20px;
}
.avatar {
  cursor: pointer;
  vertical-align: middle;
}
.dropdown {
  line-height: 64px;
}
</style>