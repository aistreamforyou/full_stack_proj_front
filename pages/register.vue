<template>
  <div class="page-wrapper">
    <el-form class="login-form" label-width="70px" :model="registerForm" :rules="rules" ref="registerForm">
      <el-form-item label="用户名" prop="username">
        <el-input size="small" v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input size="small" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPsd">
        <el-input size="small" v-model="registerForm.confirmPsd"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input size="small" v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" style="position: relative;">
        <el-input size="small" style="width: 60%" v-model="registerForm.captcha"></el-input>
        <img @click="updateCaptcha" style="position: absolute;width: 200px;height: 60px;" :src="captchaUrl"/>
      </el-form-item>
      <el-form-item label="" prop="">
<!--        <button @click.prevent=""></button>-->
        <el-button size="small" type="primary" @click.native.prevent="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Register',
  layout: 'login',
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPsd: '',
        email: '',
        captcha: ''
      },
      captchaUrl: '/api/captcha?_t=' + new Date().getTime(),
      rules: {
        username: [
          { required: true, message: '请输入用户名' }
        ]
      }
    }
  },
  methods: {
    updateCaptcha () {
      this.captchaUrl = '/api/captcha?_t=' + new Date().getTime()
    },
    register () {
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          const ret = await this.$http.post('/register', this.registerForm)
          if (ret.code === '123') {
            console.log(ret)
          }
        }
      })
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
