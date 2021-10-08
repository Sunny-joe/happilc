

const Products = require("../model/products");


const allProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ status: "sucsess", products });
  } catch (err) {
    res.status(500).json({ status: "failed", err });
    console.log(err);
  }
};
const addProduct =  async (req, res) => {
  try {
      const {productName} = req.body
    const product = await Products.create({productName, imgUrl: req.file.filename});
    res.status(200).json({ status: "sucsess", product });
  } catch (err) {
    res.status(500).json({ status: "failed", err });
    console.log(err);
  }
};
const oneProduct = async (req, res) => {
  try {
    const product = await Products.findOne({ _id: req.params.id });
    if (!product) {
      res
        .status(404)
        .json({ status: "failed", msg: "no product with this id" });
    }
    res.status(200).json({ status: "sucsess", product });
  } catch (err) {
    res.status(500).json({ status: "failed", err });
    console.log(err);
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!product) {
      res
        .status(404)
        .json({ status: "failed", msg: "no product with this id" });
    }
    res.status(200).json({ status: "sucsess", product });
  } catch (err) {
    res.status(500).json({ status: "failed", err });
    console.log(err);
  }
};
const removeProduct = async (req, res) => {
  try {
    const product = await Products.findOneAndDelete({ _id: req.params.id });
    if (!product) {
      res
        .status(404)
        .json({ status: "failed", msg: "no product with this id" });
    }
    res.status(200).json({ status: "sucsess", product });
  } catch (err) {
    res.status(500).json({ status: "failed", err });
    console.log(err);
  }
};
module.exports = {
  allProducts,
  addProduct,
  oneProduct,
  editProduct,
  removeProduct,
};
