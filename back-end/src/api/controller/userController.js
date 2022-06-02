const userService = require('../services/userService');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const result = await userService(email, password);

    return res.status(200).json(result);    
}

module.exports = login;