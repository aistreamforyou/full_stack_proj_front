<template>
  <div class="page-wrapper">
    <el-form class="login-form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input size="small" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input size="small" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <img @click="updateCaptcha" :src="captchaUrl" alt=""/>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {},
      captchaUrl: '/api/captcha?_t=' + new Date().getTime()
    }
  },
  methods: {
    updateCaptcha () {
      console.log('点击率')
      this.captchaUrl = '/api/captcha?_t=' + new Date().getTime()
    }
  }
}
</script>
<style scoped>
  .page-wrapper{
    display: flex;
    justify-content: center;
  }
  .login-form{
    width: 30%;
  }
</style>
