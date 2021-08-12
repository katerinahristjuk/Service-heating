const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    fetchAll: async (req, res) =>{
        try {
            const users = await User.find();
            res.status(200).send({
                error: false,
                message: 'All users:',
                users
            });
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error
            }) 
        }   
    },

    fetchOne: async (req, res) =>{
        try {
            const user = await User.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: `User with Id: ${req.params.id}`,
                user
            });
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error
            }) 
        }   
    },

    register: async (req, res) => {
        try{
            if (!req.body.password || req.body.password != req.body.confirmPassword) {
                return res.status(400).send({
                    error: true,
                    message: 'Bad request. Passwords don`t match :('
                })
            } 
        
            const user = await User.findOne({email: req.body.email});
            if (user) {
                return res.status(400).send({
                    error: true,
                    message: 'This email already exists! :('
                })
            } 

            // req.body.password = bcrypt.hashSync(req.body.password); 
            // req.body.confirmPassword = bcrypt.hashSync(req.body.confirmPassword); 

            const newUser = await User.create(req.body);
            res.status(201).send({
                error: false,
                message: `New user ${newUser.firstName} ${newUser.lastName} is here:`,
                newUser
            }) 
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error
            }) 
        };
    },

    login: async (req, res) => {

        const email = req.body.email
        const password = req.body.password
        console.log(email)
        console.log(password)

        try {
            const user = await User.findOne({email});
            console.log(user)
    
            if(!user) {
                return res.status(400).send({
                    error: true,
                    message: 'No user with such email :(',
                    user,
                })
            };
    
            // if(!bcrypt.compareSync({password}, user.password)) {
            if(!password==user.password) {
                return res.status(401).send({
                    error: true,
                    message: 'Incorrect password :('
                })
            };
    
            const payload = {
                id: user._id,
                email: user.email
            }
    
            const token = jwt.sign(payload, 'secret_key', {
                expiresIn: '180m'
            }); 
    
            res.send({
                error: false,
                message: 'JWT successfully generated',
                token,
                user
            });
            
        } catch (error) {
            res.status(500).send(`Internal server error: ${error}`);    
        }
    },

    update: async (req, res)=>{
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body); 
            const users = await User.find();
            res.status(200).send({
                error: false,
                message: `User ${req.params.id} is updated`,
                user,
                users});        
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error
            })
        }
    },

    delete: async (req, res) => {

        try{
            const delUser = await User.findByIdAndDelete(req.params.id);
            const users = await User.find();
            res.status(200).send({
                error: false,
                message: `User ${delUser.firstName} ${delUser.lastName} is deleted:`,
                users
            });        
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error
            }) 
        };
    }

}