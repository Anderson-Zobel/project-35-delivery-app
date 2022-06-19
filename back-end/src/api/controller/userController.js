const { 
    loginService, 
    createUser, 
    findSellers, 
    getUsers, 
    deleteUser,
} = require('../services/userService');

const login = async (req, res, _next) => {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    if (!result) {
        return res.status(404).json(null);
    }
    return res.status(200).json(result);
};

const create = async (req, res, _next) => {
    const { name, email, password, role } = req.body;

    const user = await createUser(name, email, password, role);
    if (!user) {
        return res.status(409).json({ error: 'user already exists' });
    }
    return res.status(201).json(user);
};

const adminCreateUser = async (req, res, _next) => {
    const token = req.user; 
    if (token.role !== 'administrator') {
        return res.status(401).json({ error: 'User not authorized' });
    }
    const { name, email, password, role } = req.body;
    
    const user = await createUser(name, email, password, role);
    if (!user) {
        return res.status(409).json({ error: 'user already exists' });
    }
    return res.status(201).json(user);
};

const getAllUsers = async (req, res, _next) => {
    const users = await getUsers();
    if (!users) {
        return res.status(404).json({ message: 'Users not found' });
    }
    return res.status(200).json(users);
};

const getSellers = async (_req, res, _next) => {
    const sellers = await findSellers();
    if (!sellers) {
        return res.status(404).json({ message: 'Seller not found' });
    }
    return res.status(201).json({ sellers });
};

const remove = async (req, res, _next) => {
    const token = req.user; 
    if (token.role !== 'administrator') {
        return res.status(401).json({ error: 'User not authorized' });
    }
    const { id } = req.params;
    
    await deleteUser(id);
    
    return res.status(204).end();
};

module.exports = {
    login,
    create,
    getSellers,
    getAllUsers,
    adminCreateUser,
    remove,
};