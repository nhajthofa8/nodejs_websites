const UserService = require('../../services/UserService');

const createUser = async (req, res) => {
    try {
        const {  email, password, confirmPassword} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password || !confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equal confirmPassword'
            })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const {  email, password} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } 
        
        const response = await UserService.loginUser(req.body)
        if (response.status === 'OK') {
            // Nếu đăng nhập thành công, thêm access_token vào phản hồi
            return res.status(200).json({
                status: 'OK',
                message: 'Login successful',
                access_token: response.access_token,
                refresh_token: response.refresh_token
            });
        } else {
            // Nếu đăng nhập không thành công, trả về phản hồi của dịch vụ người dùng
            return res.status(200).json(response);
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}


module.exports = {
    createUser,
    loginUser,
    
}