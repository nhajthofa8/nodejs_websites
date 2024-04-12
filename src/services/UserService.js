const User = require("../app/models/UsersModel");
const bcrypt = require("bcrypt")
const { generalAccessToken, generalRefreshToken, } = require("./JwtService")
const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {  email, password, confirmPassword,} = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The email is already'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
             
                email,
                password: hash,
                confirmPassword:hash,
              
            })
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = async (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin;
        try {
            const checkUser = await User.findOne({ email: email });
            if (!checkUser) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                });
            }

            const comparePassword = bcrypt.compareSync(password, checkUser.password);
            if (!comparePassword) {
                resolve({
                    status: 'ERR',
                    message: 'The password or user is incorrect'
                });
            }

       
            const refresh_token = await generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });

            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            });
        } catch (error) {
            reject(error);
        }
    });
};



module.exports = {
    createUser,
    loginUser,
}