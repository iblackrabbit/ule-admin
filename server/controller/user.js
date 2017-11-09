const User = require('../model/user.js')
const {
    getParameter
} = require('../utils/utils.js')
const bcrypt = require('bcrypt')
//注册
const signUp = function (req, res) {
    const {
        username,
        password,
        role
    } = req.body;
    User.findOne({
            username
        })
        .then((user) => {
            if (user) {
                res.json(getParameter({
                    success: false
                }))
            } else {
                bcrypt.hash(password, 10)
                    .then((password) => {
                        const saveUser = new User({
                            username,
                            password,
                            role
                        });
                        saveUser.save().then(() => {
                            console.log("save begin");
                            res.json(getParameter({
                                success: true
                            }));
                        });
                    });
            }
        });
}
//登录
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
    signUp,
    isLogin,
    signIn
};