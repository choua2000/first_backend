const User = require("../models/user.controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name || !email || !password || !phone || !role) {
      return res.status(404).json({ message: "Please input your data ?" });
    }
    const checkPhone = await User.findOne({ phone });
    if (checkPhone) {
      return res.status(404).json({ message: "This phone number signup " });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPass,
      phone,
      role,
    });
    if (user) {
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "Please input your data ?" });
    }
    const data = await User.findOne({ email });
    if (!data) {
      return res
        .status(404)
        .json({ message: "Please input your email or password" });
    }
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Password isMatch" });
    }
    const token = await jwt.sign(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: data.role,
      },
      "Myscretkey",
      { expiresIn: "10d" }
    );
    if (!token) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({ "Create Token Successfully": token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.update = async(req,res) =>{
  try {
    const {id} = req.params;
    const {name, email, password, tel, role } = req.body;
    const data = await User.findById(id);
    if(!data){
      return res.status(404).json({message:"not founded"})
    }
    const product = await User.findOneAndUpdate({name, email, password, tel, role});
    if(product){
      return res.status(200).json(product)
    }
    return res.status(404).json({message:"not found"})
  } catch (error) {
    return res.status(500).json({ message: error.message });

  }
}
