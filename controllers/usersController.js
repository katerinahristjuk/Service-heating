const User = require('../models/userModel');

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
        const newUser = new User(req.body);
        await newUser.save();
        
        const users = await User.find();
        res.status(200).send({
            error: false,
            message: `New user ${newUser.full_name} is here:`,
            users
        });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        }) 
    };
},
update: async (req, res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id, req.body); 
        const users = await User.find();
        res.status(200).send({
            error: false,
            message: `User ${req.params.id} is updated`,
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
        await User.findByIdAndDelete(req.params.id);
        const users = await User.find();
        res.status(200).send({
            error: false,
            message: `User ${newUser.full_name} is deleted:`,
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