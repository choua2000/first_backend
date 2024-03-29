const Product = require("../models/product.model");
exports.createProdcut = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body });
    if (product) {
      return res.status(200).json(product);
    }
    return res.status(404).json({ message: "not found" });
  } catch (error) {
    return req.status(500).json({ message: error.message });
  }
};
exports.select = async (req, res) => {
  try {
    const data = await Product.find({});
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(404).json({ message: "not found" });
  } catch (error) {
    return req.status(500).json({ message: error.message });
  }
};
exports.get_one_product = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(404).json({ message: "not found" });
  } catch (error) {
    return req.status(500).json({ message: error.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category } = req.body;
    await Product.findById(id).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "not found" });
      }
    });
    await Product.findByIdAndUpdate({
      name,
      description,
      price,
      stock,
      category,
    }).then((product) => {
      if (product) {
        return res.status(201).json({ message: "updated success" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id).then((product) => {
      if (product) {
        return res.status(200).json({ message: "deleted success" });
      }
    });
    return res.status(404).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
