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


      <template>
        <el-button :plain="true" :opensuc="opensuc" v-show="false"></el-button>
        <el-button :plain="true" :openfal="openfal" v-show="false"></el-button>
      </template>
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
        type: [],
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/api/user/signIn", {
          username: this.form.name,
          password: this.form.password
        })
        .then((response) => {
          console.log(response)
          if (response.data.data.login) {
            this.opensuc();
          }else{
            this.openfal();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    opensuc() {
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success',
          center: true,
          onClose: this.goods()
        });
    },
    openfal(){
        this.$message({
          message: '账号或密码错误',
          type: 'error',
          center: true
        });
    },
    goods(){
      this.$router.push({path:'/goods'});
    },
    reg(){
      this.$router.push({path:'/reg'});
    },
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
