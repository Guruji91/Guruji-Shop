import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldprice: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    size_1: {
      type: String,
    },
    size_2: {
      type: String,
    },
    size_3: {
      type: String,
    },
    size_4: {
      type: String,
    },
    size_5: {
      type: String,
    },
    size_6: {
      type: String,
    },
    rating: {
      type: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
