<template>
<div class="container">
  <div id="login">
      <p>欢迎登录邮乐网后台管理系统</p>
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="用户类型">
          <el-select v-model="form.region" placeholder="请选择用户类型">
          <el-option label="普通用户" value="normal"></el-option>
          <el-option label="管理员" value="administrator"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="记住密码">
          <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item class="login-button">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="reg">注册</el-button>
      </el-form-item>
      </el-form>
  </div>
</div> 
</template>
<script>
import axios from "axios";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        region: "",
        delivery: false,
        type: []
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      axios
        .post("/api/user/signIn", {
          username: this.form.name,
          password: this.form.password
        })
        .then(function(response) {
          // if (response.data.data.login) {
          //   alert("登录成功");
          // }
          console.log("open");
          open();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // open() {
    //   this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
    //     dangerouslyUseHTMLString: true
    //   });
    // }
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    reg(){
      console.log("begin reg");
      this.$router.push({path:'/reg'});
    }
  }
};
</script>
<style>
.container{
  background:url('../assets/bg.jpg') no-repeat center;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
#login {
  width: 400px;
  margin: 100px auto;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #F9FAFC;
  opacity: 0.7;
}
#login p {
  text-align: center;
  color: #000;
}
#login .login-button {
  margin-left: 48px;
}
</style>
