<template>
  <div class="form-item">
    <i class="input-icon" :class="iconClass"></i>
    <input
      class="input"
      autocomplete="new-password"
      :type="inputType"
      ref="inputEl"
    />
    <span class="span" :data-placeholder="placeholder"></span>
    <template v-if="type === 'password'">
      <img v-if="!eyeStatus" class="append-img" @click="handleSwitchShow(true)" src="./images/close_eyes.png" alt="">
      <img v-else class="append-img" @click="handleSwitchShow(false)" src="./images/open-eyes.png" alt="">
    </template>
  </div>
</template>
<script>
const onFocusFunc = function() {
    this.className = 'focus input'
  }
  const onBlurFunc = function() {
    if (this.value === '') {
      this.className = 'input'
    }
  }

export default {
  name: 'LoginInput',
  props: {
    type: {
      type: String,
      default: () => 'text'
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    iconClass: {
      type: String,
      default: () => ''
    },
  },
  data () {
    return {
      eyeStatus: false
    }
  },
  computed: {
    inputType() {
      // if (this.eyeStatus) {

      // }
      return this.type
    }
  },
  methods: {
    handleSwitchShow (eyeStatus) {
      this.eyeStatus = eyeStatus
    }
  },
  beforeDestroy () {
    const inputEl = this.$refs.inputEl
    inputEl.removeEventListener('focus', onFocusFunc)
    inputEl.removeEventListener('blur', onBlurFunc)
  },
  mounted () {
    const inputEl = this.$refs.inputEl

    inputEl.addEventListener('focus', onFocusFunc)
    inputEl.addEventListener('blur', onBlurFunc)
  }
}
</script>
<style lang="less" scoped>
.form-item {
  border-bottom: 2px solid #f1f1f1;
  position: relative;
  display: flex;
  margin: 8px 0;
  .input {
    font-size: 15px;
    color: #333333;
    border: none;
    width: 86%;
    height: 40px;
    outline: none;
    background: none;
    padding: 0 5px;
    border-radius: 3px;
    flex-grow: 1;
  }

  .span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 30px;
    color: #999;
    font-weight: bold;
    transform: translateY(-50%);
    z-index: 0;
    transition: all 0.3s;
  }
  .span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 2px;
    // background: linear-gradient(120deg, #3498db, #f3b52f);
    background: #3498db;
    transition: all 0.3s;
  }

  .focus + .span::before {
    top: -10px;
    left: 0px;
  }
  .focus + .span::after {
    width: 100%;
  }

  .input-icon {
    font-size: 18px;
    color: #999999;
    margin-right: 5px;
    display: inline-block;
    line-height: 40px;
  }
  .append-img {
    width: 20px;
    height: 25px;
    cursor: pointer;
    display: inline-block;
    margin-top: 5px;
  }
}
</style>