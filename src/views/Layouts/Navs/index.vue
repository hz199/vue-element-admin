<style lang='less'>
  @import './index.less';
</style>
<template>
  <div class="navs">
    <el-row>
      <el-col ref="navsCol" :span="22" class="navs__col-22">
        <!-- 滑块 body start -->
        <div class="navs__scroll-view" ref="tagView">
          <transition-group name="tag-list" tag="div" class="navs__scroll-body">
            <el-tag
              class="navs__tag"
              v-for="tag in 40"
              :key="tag"
              effect="Plain"
              closable>
              {{tag}}
            </el-tag>
          </transition-group>
        </div>
        <!-- <div class="navs__prev"><Icon type="arrow-left-b"></Icon></div>
        <div class="navs__next"><Icon type="arrow-right-b"></Icon></div> -->
        <!-- 滑块 body end -->
      </el-col>
      <el-col :span="2" class="navs__tag-wrapper">
        <!-- tag -->
        <el-dropdown>
          <el-button size="mini" type="primary">
            下拉菜单
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="closeAllTag" name="deleteAll">关闭所有</el-dropdown-item>
            <el-dropdown-item @click.native="closeOthersTag" name="deleteOthers">关闭其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Navs',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  computed: {
  },
  methods: {
    closeAllTag () {},
    closeOthersTag () {}
  },
  mounted () {
  },
  watch: {
  }
}
</script>
