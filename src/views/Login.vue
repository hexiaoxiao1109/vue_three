<template>
  <div class="login">
    <div class="container demo-1">
      <div class="content">
        <div id="large-header" class="large-header">
          <canvas id="demo-canvas"></canvas>
          <div class="logo_box">
            <h3>欢迎你</h3>
            <form action="#" name="f" method="post">
              <div class="input_outer">
                <span class="u_user"></span>
                <input
                  name="logname"
                  class="text"
                  style="color: #FFFFFF !important"
                  type="text"
                  placeholder="请输入账户"
                  v-model="infolist.username"
                >
              </div>
              <div class="input_outer">
                <span class="us_uer"></span>
                <input
                  name="logpass"
                  class="text"
                  style="color: #FFFFFF !important; position:absolute; z-index:100;"
                  type="password"
                  placeholder="请输入密码"
                  v-model="infolist.password"
                >
              </div>
              <div class="mb2">
                <a
                  class="act-but submit"
                  href="javascript:;"
                  style="color: #FFFFFF"
                  @click="The_login"
                >登录</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import "@/assets/css/component.css";
import "@/assets/css/demo.css";
import "@/assets/css/normalize.css";
//引入模块
import { loginApi } from "@/api";
export default {
  data() {
    return {
      infolist: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 点击登录
    The_login() {
      if (!this.infolist.username) {//判断账号输入框为空时
        this.$Message.error("账号都没有，想啥呢？");
      } else {
        loginApi({
          username: this.infolist.username,
          password: this.infolist.password
        }).then(res => {
          if (res.meta.state == 400) { // 错误状态码---400   
            this.$Message.error("猜猜是账号错了还是密码错了？");
          } else {  //登录成功
            //   存储localStorage
            let username = localStorage.setItem("username",this.infolist.username);
            this.$Message.success("登录成功");
            this.$router.push({ path: "/UserList" });
          }
        });
      }
      
    }
  }
};
</script>
 
<style scoped>
</style>