/**
 * 自定义指令
 */

/**
 * 图片懒加载
 */
const install = function (Vue, options = {}) {
  Vue.directive('lazy', {
    // 指令的定义
    bind: function (el, binding) {
      let lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let lazyImage = entry.target
          // 在可视区域中
          if (entry.intersectionRatio > 0) { // 相交率，默认是相对于浏览器视窗
            lazyImage.src = binding.value
            lazyImageObserver.unobserve(lazyImage)
          } else {// 不在可视区域中
            lazyImage.src = options.placeholder || ''
          }
        })
      })
      lazyImageObserver.observe(el)
    }
  })
}

export default {
  install
}