const express = require('express')
const router = express.Router()

const userController = require('../controller/user.js')

// const upload = require('../utils/uploadimg')

// 用户相关路由
router.post('/user/signUp', userController.signUp)
router.post('/user/signIn', userController.signIn)
router.get('/user/isLogin', userController.isLogin)
// router.get('/user/logout', userController.logout)

module.exports = router
