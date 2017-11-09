<template>
  <div id="goods">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="changePC">优惠券</el-menu-item>
      <el-submenu index="2" @click="changeWS">
        <template slot="title">工作区</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="changeOM">商品列表</el-menu-item>
    </el-menu>


    <Tickets v-if="isShow===1"></Tickets>
    <Workspace v-if="isShow===2"></Workspace>
    <Goodslist v-if="isShow===3"></Goodslist>

  </div>
</template>

<script>
  import Tickets from "./tickets.vue";
  import Workspace from "./workspace.vue";
  import Goodslist from "./goodslist.vue";

  export default {
    data() {
      return {
        activeIndex: "1",
        activeIndex2: "1",
        isShow: 1
      };
    },
    components: {
      Tickets,
      Workspace,
      Goodslist
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changePC() {
        this.isShow = 1
      },
      changeWS() {
        this.isShow = 2
      },
      changeOM() {
        this.isShow = 3
      }
    }
  };
</script>
<style>
  .search {
    width: 300px;
    margin-top: 20px;
    float: right;
  }

  .search-input {
    width: 200px;
  }

  .search-button {
    width: 70px;
  }
</style>