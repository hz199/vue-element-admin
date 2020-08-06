<template>
  <el-menu
    :default-active="getCurrentRouter"
    class="el-menu-vertical"
    :collapse="getSliderCollapse"
    background-color="#515a6e"
    text-color="rgba(255, 255, 255, 0.7)"
    @select="handleSelect"
    active-text-color="#fff"
  >
    <div class="logo">logo</div>
    <!-- -->

    <template v-for="route in routesConfig">
      <template v-if="!route.meta.isHide">
        <!-- children 只有一个默认是 el-menu-item 否则 存在二级菜单 -->
        <template v-if="route.children && route.children.length <= 1">
          <el-menu-item :key="route.children[0].path" :index="route.children[0].path">
            <i :class="route.children[0].meta.icon"></i>
            <span slot="title">{{route.children[0].meta.title}}</span>
          </el-menu-item>
        </template>
        <!-- 存在下拉菜单 -->
        <template v-else>
          <el-submenu :key="route.path" :index="route.path">
            <template slot="title">
              <i :class="route.meta.icon"></i>
              <span slot="title">{{route.meta.title}}</span>
            </template>

            <template v-if="route.children.length > 1">
              <template v-for="item in route.children">
                <el-menu-item :key="route.path + '/' + item.path" :index="route.path + '/' + item.path">
                  <i :class="item.meta.icon"></i>
                  <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
              </template> 
            </template>
          </el-submenu>
        </template>
      </template>
    </template>
  </el-menu>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { routes } from '@/router/config'
import { getItem } from '@/utils/localStorage'
import { CURRENT_PATH } from '@/store/modules/settings'

export default {
  data() {
    return {
      routesConfig: [
        {
          meta: {}
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse',
      'getCurrentRouter'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentRouter'
    ]),
    handleSelect (path) {
      if (path !== this.getCurrentRouter) {
        this.$router.push({
          path
        })

        this.setCurrentRouter(path)
      }
    }
  },
  created () {
    this.routesConfig = Object.freeze(routes)
    const currentRouter = getItem(CURRENT_PATH) || '/'
    this.setCurrentRouter(currentRouter)
  }
}
</script>
<style lang="less" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical {
  min-height: 100vh;
  position: relative;
  z-index: 1;
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
