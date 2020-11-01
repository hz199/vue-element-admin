<template>
  <div class="home">
    <el-button>默认按钮</el-button>
    <p v-for="item in 10" :key="item">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
