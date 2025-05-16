const Programmers = require("../models/programmers");


exports.getAllProgrammers = async (req, res, next)=>{
    try{
        const data = await Programmers.find();
        if(data && data.length !== 0){
            return res.status(200).send({
                message : "programmers found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "programmers not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.getProgrammerById = async (req, res, next)=>{
    try{
        const data = await Programmers.findById(req.params.id);
        if(data){
            return res.status(200).send({
                message : "programmer found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "programmer not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.createProgrammer = async (req, res, next)=>{
    try{
        const data = new Programmers({
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        });
        const result =await data.save();
        if (result){
            return res.status(201).send({
                message: "programmer created",
                payload: result
            })
        }
        res.status(404).send({
            message: "programmer not created"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updateProgrammer = async (req, res, next)=>{
    try{
        const data = {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        };
        const result =await Programmers.findByIdAndUpdate(req.params.id, data);
        if (result){
            return res.status(201).send({
                message: "programmer updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "programmer not updated"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.deleteProgrammer = async (req, res, next)=>{
    try{
        const result =await Programmers.findByIdAndDelete(req.params.id);
        if (result){
            return res.status(201).send({
                message: "programmer deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "programmer not deleted"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};