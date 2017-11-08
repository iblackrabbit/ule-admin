/*
 * mongoose数据库连接
 */

const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/lagou'

const options = {
  useMongoClient: true
}

mongoose
  .connect(uri, options)
  .then((db) => {console.log('Database Connect Success')})
  .catch((err) => {console.log(err)})

module.exports = mongoose
