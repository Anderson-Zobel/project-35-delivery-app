const userService = require('../services/userService');

const login = async (req, res, _next) => {
    const { email, password } = req.body;
    const result = await userService(email, password);
    if (!result) {
        return res.status(404).json(null);
    }
    return res.status(200).json(result);    
};

module.exports = login;