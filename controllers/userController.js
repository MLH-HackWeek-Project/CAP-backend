const User = require('../models/User');

async function getAllUsers(req, res){
    try {
        const users = await User.find();
        res.status(200).json({users});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function createUser(req, res){
    const userData = req.body;

    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getUser(req, res){
    const userID = req.params.id;

    try {
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateUser(req, res){
    const userID = req.params.id;
    const updatedUserData = req.body;

    try {
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update user fields with new data
        Object.assign(user, updatedUserData);

        // Save the updated user
        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteUser(req, res){
    const userID = req.params.id;

    try {
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Remove the user from the database
        await user.deleteOne();

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}