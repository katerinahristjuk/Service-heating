const Intervention = require('../models/interventionsModel');

module.exports = {
fetchAll: async (req, res) =>{
    try {
        const interventions = await Intervention.find();
        res.status(200).send({
            message: "All interventions are here:",
            interventions
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
        const intervention = await Intervention.findById(req.params.orderId);
        res.status(200).send({
            message: `Intervention ${intervention._id} here:`,
            intervention
        });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        }) 
    }   
},
post: async (req, res) => {
    try{
        const newIntervention = new Intervention(req.body);
        await newIntervention.save();
        
        res.status(200).send({
            message: "New intervention is added to the list",
            newIntervention
        });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        }) 
    };
},
delete: async (req, res) => {

    try{
        const delInt = await Intervention.findByIdAndDelete(req.params.orderId);
        const interventions = await Intervention.find();
        res.status(200).send({
            message: `Intervention ${delInt._id} is successfully deleted`,
            delInt,
            interventions
        });        
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        }) 
    };
}
}