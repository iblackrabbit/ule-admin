<template>
<div class="container">
  <div id="reg">
      <p>欢迎注册</p>
      <el-form ref="form" :model="form" status-icon :rules="rules"  label-width="80px">
      <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
    <el-form-item class="reg-button">
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
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
    var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
      };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        pass: "",
        checkPass: "",
        name: "",
        role:""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
        .post("/api/user/signUp", {
          username: this.form.name,
          password: this.form.pass,
          role:this.form.role
        })
        .then(function(response) {
          console.log("success");          
          console.log(response);
          open();
        })
        .catch(function(error) {
          console.log(error);
        });
        } else {
          console.log("error submit!!");
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
<style>
.container {
  background: url("../assets/bg.jpg") no-repeat center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#reg {
  width: 400px;
  margin: 100px auto;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9fafc;
  opacity: 0.7;
}
#reg p {
  text-align: center;
  color: #000;
}
#reg .reg-button {
  margin-left: 48px;
}
</style>
