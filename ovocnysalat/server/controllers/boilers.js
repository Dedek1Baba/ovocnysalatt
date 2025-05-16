const Boilers = require("../models/boilers");


exports.getAllBoilers = async (req, res, next)=>{
    try{
        const data = await Boilers.find();
        if(data && data.length !== 0){
            return res.status(200).send({
                message : "boilers found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "boilers not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.getBoilerById = async (req, res, next)=>{
    try{
        const data = await Boilers.findById(req.params.id);
        if(data){
            return res.status(200).send({
                message : "boiler found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "boiler not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.createBoiler = async (req, res, next)=>{
    try{
        const data = new Boilers({
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        });
        const result =await data.save();
        if (result){
            return res.status(201).send({
                message: "boiler created",
                payload: result
            })
        }
        res.status(404).send({
            message: "boiler not created"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updateBoiler = async (req, res, next)=>{
    try{
        const data = {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        };
        const result =await Boilers.findByIdAndUpdate(req.params.id, data);
        if (result){
            return res.status(201).send({
                message: "boiler updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "boiler not updated"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.deleteBoiler = async (req, res, next)=>{
    try{
        const result =await Boilers.findByIdAndDelete(req.params.id);
        if (result){
            return res.status(201).send({
                message: "boiler deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "boiler not deleted"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};