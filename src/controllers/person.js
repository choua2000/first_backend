const Person = require('../models/person')
exports.createPerson = async(req,res) =>{
    try {
        const {name,age} = req.body;
        const person = await Person.create({name, age});
        if(person){
            return res.status(200).json(person)
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.updatePerson = async(req,res) =>{
    try {
        const {id} = req.params;
        const {name,age} = req.body;
        const person = await Person.findById(id);
        if(!person){
            return res.status(404).json({message:"not found"})
        }
       const data = await Person.findByIdAndUpdate({
            name,
            age
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getPerson_id = async(req,res) =>{
    try {
        const {id} = req.params;
        const data = await Person.findById(id);
        if(!data){
            return res.status(404).json({message:"not found"})
        } 
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.selectPerson = async(req,res) =>{
    try {
        const data = await Person.find({});
        if(data){
            return res.status(200).json(data)
        }
        return res.status(404).json({message:"not found"})
    } catch (error) {
        return res.status(500).json({message:error.message}) 
    }
}