<template>
  <div class="login-box">
    <div class="title-box">
      <h1>南京诚迈科技有限公司</h1>
    </div>

    <div class="login-form">
      <div class="form-title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label-width="0" prop="username">
          <el-input
            class="login-input-text"
            type="password"
            v-model="ruleForm.username"
            autocomplete="off"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0" prop="pass">
          <el-input
            class="login-input-text"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-s-goods"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div v-if="needCaptcha" class="input-row">
            <!-- <span class="title">验证码：</span> -->
            <!-- <m-input
              type="text"
              v-model="captchaText"
              placeholder="请输入验证码"
            ></m-input> -->
            <el-input
              type="text"
              v-model="captchaText"
              placeholder="请输入验证码"
            ></el-input>
            <div
              class="send-code-btn captcha-view"
              @click="captcha('refreshCaptcha')"
            >
              <i v-if="captchaing" class="uni-icon_toast uni-loading"></i>
              <!-- <img v-if="!captchaing" :src="captchaBase64" width="100%" height="100%"></img> -->
              <img
                v-if="!captchaing"
                :src="captchaBase64"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login.js";
import { getDeviceUUID } from "@/utils/device.js";
import axios from "axios";
const captchaOptions = {
  deviceId: getDeviceUUID(),
  scene: "login"
};
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateusername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      user_id: "60877523922e3500012aa18a",
      ruleForm: {
        pass: "",
        username: ""
      },
      needCaptcha: localStorage.getItem("uni-needCaptcha"),
      captchaing: false,
      captchaBase64: "",
      captchaText: "",
      rules: {
        username: [{ validator: validateusername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  created() {
    if (this.needCaptcha) {
      this.captcha("createCaptcha");
    }
  },
  methods: {
    // 验证码
    async captcha(action, args) {
      if (this.captchaing) return;

      // 验证不loading
      this.captchaing = true;

      // let { result: res } = await uniCloud.callFunction({
      //   name: "user-center",
      //   data: {
      //     action,
      //     params: {
      //       ...captchaOptions,
      //       ...args
      //     }
      //   }
      // });
      let param = {
        action,
        params: {
          ...captchaOptions,
          ...args
        }
      };
      let res = await login(param);
      this.captchaing = false;
      if (res.code === 0) {
        this.captchaBase64 = res.captchaBase64;
      } else {
      }
      return res;
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let param = {
            action: "login",
            params: {
              username: this.ruleForm.username,
              password: this.ruleForm.pass,
              captcha: this.captchaText,
              ...captchaOptions
            }
          };
          this.$store
            .dispatch("app/loginAction", param)
            .then(res => {
              if (res.code === 0) {
                this.$message.success(res.msg);
                // 页面跳转
                this.$router.push({ path: "/home" });
              } else {
              }
            })
            .catch(err => {
              this.$message.warning(err.msg);
              this.needCaptcha = err.needCaptcha;
              localStorage.setItem("uni-needCaptcha", this.needCaptcha);
              if (this.needCaptcha) {
                this.captcha("createCaptcha");
              }
            });
          // login(param)
          //   .then(res => {
          //     console.log(res);
          //     if (res.code === 0) {
          //       this.$message.success(res.msg);
          //       // 页面跳转
          //       this.$router.push({ name: "ConsoleIndex" });
          //     } else {
          //     }
          //   })
          //   .catch(err => {
          //     console.log(err);
          //     this.$message.warning(err.msg);
          //     this.needCaptcha = err.needCaptcha;
          //     localStorage.setItem("uni-needCaptcha", this.needCaptcha);
          //     if (this.needCaptcha) {
          //       this.captcha("createCaptcha");
          //     }
          //   });
        } else {
          this.$message.warning("请填写必要参数");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.login-box {
  height: 100vh;
  width: 100%;
  background: url("../../assets/images/loginbg.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  .title-box {
    // width: 100%;
    position: absolute;
    top: 20px;
    left: 20px;
    h1 {
      background-image: linear-gradient(135deg, deeppink, dodgerblue);
      font-size: 20px;
      font-weight: bold;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      -moz-box-decoration-break: clone;
      color: transparent;
      position: relative;

      font-family: "Raleway", sans-serif;
      font-size: 35px;
      color: dodgerblue;
      letter-spacing: 6px;
      text-shadow: 4px 4px 0 #00000010, 4px -4px 0 #00000010,
        -4px -4px 0 #00000010, -4px 4px 0 #00000010, 4px 3px 0 #00000010,
        4px -3px 0 #00000010, -4px -3px 0 #00000010, -4px 3px 0 #00000010,
        4px 2px 0 #00000010, 4px -2px 0 #00000010, -4px -2px 0 #00000010,
        -4px 2px 0 #00000010, 4px 1px 0 #00000010, 4px -1px 0 #00000010,
        -4px -1px 0 #00000010, -4px 1px 0 #00000010, 4px 0px 0 #00000010,
        4px 0px 0 #00000010, -4px 0px 0 #00000010, -4px 0px 0 #00000010,
        3px 4px 0 #00000010, 3px -4px 0 #00000010, -3px -4px 0 #00000010,
        -3px 4px 0 #00000010, 3px 3px 0 #00000010, 3px -3px 0 #00000010,
        -3px -3px 0 #00000010, -3px 3px 0 #00000010, 3px 2px 0 #00000010,
        3px -2px 0 #00000010, -3px -2px 0 #00000010, -3px 2px 0 #00000010,
        3px 1px 0 #00000010, 3px -1px 0 #00000010, -3px -1px 0 #00000010,
        -3px 1px 0 #00000010, 3px 0px 0 #00000010, 3px 0px 0 #00000010,
        -3px 0px 0 #00000010, -3px 0px 0 #00000010, 2px 4px 0 #00000010,
        2px -4px 0 #00000010, -2px -4px 0 #00000010, -2px 4px 0 #00000010,
        2px 3px 0 #00000010, 2px -3px 0 #00000010, -2px -3px 0 #00000010,
        -2px 3px 0 #00000010, 2px 2px 0 #00000010, 2px -2px 0 #00000010,
        -2px -2px 0 #00000010, -2px 2px 0 #00000010, 2px 1px 0 #00000010,
        2px -1px 0 #00000010, -2px -1px 0 #00000010, -2px 1px 0 #00000010,
        2px 0px 0 #00000010, 2px 0px 0 #00000010, -2px 0px 0 #00000010,
        -2px 0px 0 #00000010, 1px 4px 0 #00000010, 1px -4px 0 #00000010,
        -1px -4px 0 #00000010, -1px 4px 0 #00000010, 1px 3px 0 #00000010,
        1px -3px 0 #00000010, -1px -3px 0 #00000010, -1px 3px 0 #00000010,
        1px 2px 0 #00000010, 1px -2px 0 #00000010, -1px -2px 0 #00000010,
        -1px 2px 0 #00000010, 1px 1px 0 #00000010, 1px -1px 0 #00000010,
        -1px -1px 0 #00000010, -1px 1px 0 #00000010, 1px 0px 0 #00000010,
        1px 0px 0 #00000010, -1px 0px 0 #00000010, -1px 0px 0 #00000010,
        0px 4px 0 #00000010, 0px -4px 0 #00000010, 0px -4px 0 #00000010,
        0px 4px 0 #00000010, 0px 3px 0 #00000010, 0px -3px 0 #00000010,
        0px -3px 0 #00000010, 0px 3px 0 #00000010, 0px 2px 0 #00000010,
        0px -2px 0 #00000010, 0px -2px 0 #00000010, 0px 2px 0 #00000010,
        0px 1px 0 #00000010, 0px -1px 0 #00000010, 0px -1px 0 #00000010,
        0px 1px 0 #00000010, 0px 0px 0 #00000010, 0px 0px 0 #00000010,
        0px 0px 0 #00000010, 0px 0px 0 #00000010, 0 0 0 #00000010;
    }
  }
  .login-form {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .form-title {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 3px;
      border-radius: 10px 10px 0 0;
      background: $color-main;
      // height: 50px;
      padding: 20px 0;
      width: 100%;
    }
    .el-form {
      width: 100%;
      padding: 30px;
      .el-form-item {
        margin: 20px 0;
        .el-button {
          width: 100%;
        }
        .input-row {
          display: flex;
          img {
          }
        }
      }
    }
  }
}
</style>
