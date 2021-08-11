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
    //da se smeni vo prav REGISTER a ne CREATE
    try{
        if (!req.body.password || req.body.password != req.body.confirmPassword) {
            return res.status(400).send({
                error: true,
                message: 'Bad request. Passwords don`t match :('
            })
        } //dali password-ot e vnesen i dali e ist so confirm_pass
       
        const user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).send({
                error: true,
                message: 'This email already exists! :('
            })
        } //dali vo bazata veke postoi vakov email

        req.body.password = bcrypt.hashSync(req.body.password); // encrypts password
        req.body.confirmPassword = bcrypt.hashSync(req.body.confirmPassword); // encrypts password

        const newUser = await User.create(req.body);
        res.status(201).send({
            error: false,
            message: `New user ${newUser.firstName} ${newUser.lastName} is here:`,
            newUser
         }) // zapis na nov korisnik
        // const newUser = new User(req.body);
        // await newUser.save();
        
        // const users = await User.find();
        // res.status(200).send({
        //     error: false,
        //     message: `New user ${newUser.firstName} ${newUser.lastName} is here:`,
        //     users
        // });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        }) 
    };
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