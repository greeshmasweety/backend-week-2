const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = await registerUser(username, password, role);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token, role } = await loginUser(username, password);
        res.json({ message: 'Login successful', token, role });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { register, login };
