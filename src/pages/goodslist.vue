<template lang="html">
    <div class="processcenter">
          <div class="search">
      <el-input v-model="input" placeholder="请输入内容" class="search-input"></el-input>
      <el-button type="primary" class="search-button">查询</el-button>
    </div>



    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <div class="block">
      <p></p>
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        tableData: [{
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄11111111"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄32132131231"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄1313131313131"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ],
        input: ""
      };
    }
 
  }
  



</script>