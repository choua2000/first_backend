const Test = require('../models/test')
exports.createTest = async (req,res) =>{
    try {
        const { name,tel} = req.body;
        const data = await Test.create({name,tel})
        if(data){
            return res.status(200).json(data)
        }
        return res.status(404).json({message:"not found"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}