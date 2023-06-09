const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    statuss: { type: String, default: "pending" },
  },
  { timestams: true } //createdAt,updateAt
);

module.exports = mongoose.model("Order", OrderSchema);
