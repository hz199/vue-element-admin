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
            <Tag
              v-for="tag in tags"
              :key="tag.name"
              :type="tag.type"
              :text="tag.name"
              closable
              :routerPath="`${tag.name}`"
              :onClose="handleTagClose"
              :onTap="handleOnTap"
            ></Tag>
          </transition-group>
        </div>
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
import Tag from './Tag'

const tags = [...Array(40)].map((k, i) => i).map(item => ({
  name: '标签' + item,
  type: item === 36 ? 'primary' : 'default'
}))

export default {
  name: 'Navs',
  components: {
    Tag
  },
  data () {
    return {
      tags: tags
    }
  },
  computed: {
  },
  methods: {
    closeAllTag () {},
    closeOthersTag () {},
    handleTagClose (routerPath, type) {
      console.log(routerPath, type, 11)
    },
    handleOnTap (routerPath, type) {
      console.log(routerPath, type, 22)
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>
