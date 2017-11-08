module.exports = {
  getParameter: function (data) {
    return {
      "errcode": 0,
      "errmsg": "",
      "data": data
    }
  },
  getJoblist: function (data) {
    return {
      "content": {
          "data": data,
          "rows": []
      },
      "message": "查询成功!",
      "state": 1
    }
  }
}
