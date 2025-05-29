const Salad = require("../models/people");

exports.getAllSalads = async (req, res) => {
    try {
        const data = await Salad.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "salads found",
                payload: data,
            });
        }
        res.status(404).send({ message: "no salads found" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getSaladById = async (req, res) => {
    try {
        const data = await Salad.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "salad found",
                payload: data,
            });
        }
        res.status(404).send({ message: "salad not found" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.createSalad = async (req, res) => {
    try {
        const data = new Salad({
            name: req.body.name,
            fruit: req.body.fruit,
            dressing: req.body.dressing,
            topping: req.body.topping
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "salad created",
                payload: result
            });
        }
        res.status(400).send({ message: "salad not created" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.deleteSalad = async (req, res) => {
    try {
        const deleted = await Salad.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).send({ message: `salad with id ${req.params.id} not found` });
        }
        return res.status(200).send({
            message: "salad deleted",
            payload: deleted
        });
    } catch (err) {
        console.log(`Error deleting salad with id ${req.params.id}:`, err);
        res.status(500).send({ message: "failed to delete salad", error: err });
    }
};
