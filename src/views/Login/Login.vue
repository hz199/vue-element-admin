<template>
  <div class="login">
    <main class="login__body">
      <div class="login__logo">
        后台管理
      </div>
      <el-form :model="formData" status-icon :rules="rulesForm" ref="ruleForm" autocomplete="off">
        <el-form-item prop="pass">
          <LoginInput
            iconClass="el-icon-user"
            placeholder="用户名"
            v-model="formData.userName"
          ></LoginInput>
        </el-form-item>
        <el-form-item prop="checkPass">
          <LoginInput
            iconClass="el-icon-unlock"
            placeholder="密码"
            type="password"
            v-model="formData.password"
          ></LoginInput>
        </el-form-item>
        <el-form-item prop="checkPass">
          <LoginInput
            iconClass="el-icon-mobile-phone"
            placeholder="验证码"
            type="code"
            :codeFetchFunc="fetchAuthCode"
            v-model="formData.authCode"
          ></LoginInput>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%; margin-bottom: 30px;" type="primary" @click="submitForm('ruleForm')">
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>
<script>
import LoginInput from './Input'
import { orderTableList } from '@/services/order'

export default {
  name: 'Login',
  components: {
    LoginInput
  },
  data () {
    return {
      formData: {},
      rulesForm: {}
    }
  },
  methods: {
    submitForm () {
      console.log(this.formData)
    },
    fetchAuthCode () {
      return orderTableList()
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: url('./images/bg2.png') left top no-repeat, url('./images/bg1.png') bottom right no-repeat;
  background-size: 30%;
  &__body {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    border-radius: 2px;
    width: 400px;
    overflow: hidden;
    padding: 10% 8px 8px 8px;
  }
  &__logo {
    font-size: 28px;
    // color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
  }
}
</style>
