<template>
  <div class="layout">
    <Menus/>
    <div class="right-content">
      <Header/>
      <main class="main">
        <transition name="fadeTran">
          <router-view></router-view>
        </transition>
      </main>
      <Footer/>
    </div>
    <!-- <slot/> -->
    <el-backtop target=".app"></el-backtop>
  </div>
</template>
<script>
import Menus from './Menus'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    Menus,
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
.layout {
  display: flex;
}
.right-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  position: relative;
  z-index: 0;
}
.main {
  flex-grow: 1;
  margin: 8px 8px;
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  // box-shadow: 0 0 20px 0px rgba(0,0,0,.2);
}

.fadeTran-enter-active {
  transition: all 1s;
}
.fadeTran-enter {
  transform: translateX(-30px);
  opacity: 0;
}
</style>