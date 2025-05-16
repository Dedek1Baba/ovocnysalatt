const Furnitures = require("../models/furnitures");


exports.getAllFurnitures = async (req, res, next)=>{
    try{
        const data = await Furnitures.find();
        if(data && data.length !== 0){
            return res.status(200).send({
                message : "furnitures found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "furnitures not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.getFurnitureById = async (req, res, next)=>{
    try{
        const data = await Furnitures.findById(req.params.id);
        if(data){
            return res.status(200).send({
                message : "furniture found!!!!!!",
                payload: data,
            });
        } 

        res.status(404).send({
             message: "furniture not found"
        })
        
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.createFurniture = async (req, res, next)=>{
    try{
        const data = new Furnitures({
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        });
        const result =await data.save();
        if (result){
            return res.status(201).send({
                message: "furniture created",
                payload: result
            })
        }
        res.status(404).send({
            message: "furniture not created"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updateFurniture = async (req, res, next)=>{
    try{
        const data = {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        };
        const result =await Furnitures.findByIdAndUpdate(req.params.id, data);
        if (result){
            return res.status(201).send({
                message: "furniture updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "furniture not updated"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
exports.deleteFurniture = async (req, res, next)=>{
    try{
        const result =await Furnitures.findByIdAndDelete(req.params.id);
        if (result){
            return res.status(201).send({
                message: "furniture deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "furniture not deleted"
       })
       
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};