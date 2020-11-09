<style lang='less'>
  @import './index.less';
  .tag-list-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .tag-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .tag-list-enter-active, .tag-list-leave-active {
    transition: all 0.5s;
  }
</style>
<template>
  <div class="navs" id="navs">
    <el-row>
      <el-col ref="navsCol" :span="22" class="navs__col-22">
        <!-- 滑块 body start -->
        <div class="navs__scroll-view" ref="tagView">
          <el-scrollbar native>
            <transition-group 
              name="tag-list" tag="div"
              class="navs__scroll-body">
              <Tag
                class=""
                v-for="tag in getTagPages"
                :key="tag.path"
                :type="tag.type"
                :text="tag.title"
                :tagItem="tag"
                :ref="tag.type === 'primary' ? 'primary' : null"
                :closable="!tag.flag"
                :routerPath="tag.path"
                :onClose="handleTagClose"
                :onTap="handleOnTap"
              ></Tag>
            </transition-group>
          </el-scrollbar>
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
import { mapGetters, mapMutations } from 'vuex'
import Tag from './Tag'

export default {
  name: 'Navs',
  components: {
    Tag
  },
  data () {
    return {
      observer: null
    }
  },
  computed: {
    ...mapGetters([
      'getTagPages',
      'getTagPath',
      'getCurrentRouter'
    ])
  },
  methods: {
    ...mapMutations([
      'deleteOneTag',
      'deleteAllTag',
      'deleteOthersTag',
      'setCurrentRouter'
    ]),
    closeAllTag () {
      this.deleteAllTag()
      if (this.getCurrentRouter !== '/') {
        this.$router.push({
          path: '/'
        })
      }
    },
    closeOthersTag () {
      this.deleteOthersTag()
    },
    handleTagClose (item) {
      const index = this.getTagPath.indexOf(item.path)
      if (item.ref === 'currentTagPage') {
        const path = this.getTagPath[index - 1]
        this.$router.push({
          path: this.getTagPath[index - 1]
        })

        this.setCurrentRouter(path)
      }
      const payload = {
        index,
        ref: item.ref
      }

      this.deleteOneTag(payload)
    },
    handleOnTap (routerPath) {
      if (this.getCurrentRouter !== routerPath) {
        this.$router.push({
          path: routerPath
        })

        this.setCurrentRouter(routerPath)
      }
    },
    // 启动dom监听
    observerEl () {
      this.observer = new IntersectionObserver(entries => {
        if (entries[1].intersectionRatio > 0) {
          if (entries[0].intersectionRatio > 0) {
            // console.log('进入可视区域', entries)
              // do something
          } else {
            // console.log('移出可视区域')
            setTimeout(() => {
              const domTarget = entries[0].target
              domTarget && domTarget.scrollIntoView({
                behavior: "auto",
                block: "center",
                inline: "nearest"
              })
            }, 100)
          }
        }
    })
    },
    moveTag () {
      this.observer.disconnect()
      const primaryDom = this.$refs.primary[0].$el
      this.observer.observe(primaryDom)
      this.observer.observe(document.querySelector('#navs'))
    },
  },
  mounted () {
    this.observerEl()
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  watch: {
    getTagPages () {
      this.$nextTick(() => {
        this.moveTag()
      })
    }
  }
}
</script>
