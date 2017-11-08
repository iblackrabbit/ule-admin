const User = require('../model/user.js')
const {
    getParameter
} = require('../utils/utils.js')
const bcrypt = require('bcrypt')
const signIn = function (req, res) {
    const {
        username,
        password
    } = req.body
    User.findOne({
            username
        })
        .then((user) => {
            if (!user) {
                res.json(getParameter({
                    login: false
                }))
            } else {
                bcrypt.compare(password, user.password)
                    .then((result) => {
                        if (result) {
                            // 存储session
                            req.session.username = user.username
                            res.json(getParameter({
                                login: true,
                                username: user.username
                            }))
                        } else {
                            res.json(getParameter({
                                login: false
                            }))
                        }
                    })
            }
        })
}
// 判断用户是否登录接口
const isLogin = function (req, res) {
    res.json(getParameter({
        login: req.session.username ? true : false,
        username: req.session.username
    }))
}
module.exports = {
    signIn,
    isLogin
};