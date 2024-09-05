import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        // Generate JWT token
        const token = jwt.sign({ id: newUser.id, role: newUser.role }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ token, user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user details
        user.name = name || user.name;
        user.email = email || user.email;

        await user.save();

        res.status(200).json({ message: 'Profile updated', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
