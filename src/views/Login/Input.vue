<template>
  <div class="login-form-item">
    <!-- 头部 icon -->
    <i class="input-icon" :class="iconClass"></i>
    <input
      class="input"
      autocomplete="new-password"
      :type="inputType"
      ref="inputEl"
      v-bind="$attrs"
      @input="handleInput"
      @blur="handleBlur"
    />
    <span class="span" :data-placeholder="placeholder"></span>
    <!-- 密码 -->
    <template v-if="type === 'password'">
      <img v-if="!eyeStatus" class="append-img" @click="handleSwitchShow(true)" src="./images/close_eyes.png" alt="">
      <img v-else class="append-img" @click="handleSwitchShow(false)" src="./images/open-eyes.png" alt="">
    </template>
    <!-- 验证码 -->
    <template v-if="type === 'code'">
      <el-button :disabled="codeStatus" type="text" @click="handleCode">{{codeText}}</el-button>
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
    codeFetchFunc: {
      type: Function,
      default: () => {}
    },
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
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data () {
    return {
      eyeStatus: false,

      codeText: '获取验证码',
      codeStatus: false, // false 为可以点击状态 true 禁用不可点击
      codeTime: 60 // 倒计时60s
    }
  },
  computed: {
    inputType() {
      let newType = ''
      if (this.eyeStatus) {
        newType = 'text'
      } else {
        newType = this.type === 'code' ? 'text' : this.type
      }
      return newType
    }
  },
  methods: {
    handleSwitchShow (eyeStatus) {
      this.eyeStatus = eyeStatus
    },
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleCode () {
      if (!this.codeFetchFunc) return console.error('[codeFetchFunc] not is function')

      this.codeFetchFunc().then(() => {
        this.codeStatus = true
        this.codeCountDown()
      })
    },
    codeCountDown () {
      const timer = setInterval(() => {
        if (this.codeTime <= 0) {
          clearInterval(timer)

          this.codeTime = 60
          this.codeText = '获取验证码'
          this.codeStatus = false
        } else {
          this.codeTime -= 1
          this.codeText = `${this.codeTime}s后重新发送`
        }
      }, 1000)
    },
    // 校验数据
    handleBlur () {
      this.elForm.validateField(this.elFormItem.prop)
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
.login-form-item {
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
<style>
.el-form-item.is-error .login-form-item .span::before {
  color: #F56C6C;
}
.el-form-item.is-error .login-form-item .input-icon {
  color: #F56C6C;
}
.el-form-item.is-error .login-form-item .span::after {
  background: #F56C6C;
}
.el-form-item.is-error .login-form-item {
  border-bottom: 2px solid #F56C6C;
}
</style>