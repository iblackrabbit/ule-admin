const db = require('../utils/database.js')

// 定义Schema
const schema = new db.Schema({
  "positionName": {
    type: String,
    required: true
  },
  "city": {
    type: String,
    required: true
  },
  "createTime": {
    type: Date,
    required: true
  },
  "salary": {
    type: String,
    required: true
  },
  "companyLogo": {
    type: String,
    required: true
  },
  "companyName": {
    type: String,
    required: true
  }
})

// 定义model
const Job = db.model('jobs', schema)

module.exports = Job
