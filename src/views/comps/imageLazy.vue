<template>
  <div class="image-lazy clearfix">
    <div class="img-wrapper">
      <img v-for="img in imageDatas" :key="img" v-lazy="img" class="img">
    </div>
    <div class="code">
      <pre class="pre">
const install = function (Vue, options = {}) {
  Vue.directive('lazy', {
    // 指令的定义
    bind: function (el, binding) {
      let lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let lazyImage = entry.target
          // 在可视区域中
          if (entry.intersectionRatio > 0) { // 相交率，默认是相对于浏览器视窗
            setTimeout(() => {
              lazyImage.src = binding.value
              lazyImageObserver.unobserve(lazyImage)
            })
          } else {// 不在可视区域中
            lazyImage.src = options.placeholder || ''
          }
        })
      })
      lazyImageObserver.observe(el)
    }
  })
}
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImagesLazy',
  data () {
    return {
      imageDatas: [
        'http://pic.closeeyes.cn/fengjing1.jpg',
        'http://pic.closeeyes.cn/fengjing2.jpg',
        'http://pic.closeeyes.cn/fengjing3.jpg',
        'http://pic.closeeyes.cn/fengjing4.jpg',
        'http://pic.closeeyes.cn/fengjing5.jpg',
        'http://pic.closeeyes.cn/fengjing6.jpg',
        'http://pic.closeeyes.cn/fengjing7.jpg',
        'http://pic.closeeyes.cn/DanubeRiver03.jpg',
        'http://pic.closeeyes.cn/react2.jpg',
        'http://study.closeeyes.cn/js2.jpg'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.img-wrapper {
  width: 200px;
  float: left;
  > .img {
    width: 100%;
  }
}

.code {
  float: left;
}
</style>

