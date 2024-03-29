const People = require('../models/people');
exports.createPeople = async (req, res) => {
  try {
    const {name, phone} = req.body;
    if(!name || !phone){
      return res.status(404).json({message:"not found"})
    }
    const data = await People.create({name,phone})
    if(data){
    return res.status(200).json(data)
    }
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}