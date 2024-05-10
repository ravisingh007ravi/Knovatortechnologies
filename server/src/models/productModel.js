const mongoose = require("mongoose");
const validation = require("../validation/validation");

const ProductsSchema = new mongoose.Schema(
  {
    productImage: {
      type: String,
      required: [true, "Please provide the Product Image"],
      unique: true,
      trim: true,
      validate: [validation.isValidTitle, "please provide a Product Image"],
    },
    productName: {
      type: String,
      require: [true, "Please Choose Product Name"]
    },
    productDescription: {
      type: String,
      required: [true, "Please provide the description"],
      trim: true,
    },
    productprice: {
      type: Number,
      required: [true, "Please provide the price"],
      trim: true,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductsSchema);
