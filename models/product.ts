import { Schema, model } from "mongoose";
import Joi from "joi";

const codeRegexp = /^[0-9]{9}$/;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0.01,
      required: [true, "Price must be required"],
    },
    location: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["basic", "sale", "stock"],
      default: "basic",
    },
    code: {
      type: String,
      required: true,
      unique: true,
      match: codeRegexp,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0.01).required(),
  location: Joi.string().required(),
  active: Joi.bool(),
  status: Joi.string().valid("basic", "sale", "stock"),
  code: Joi.string().pattern(codeRegexp),
});

const statusJoiSchema = Joi.object({
  status: Joi.string().valid("basic", "sale", "stock").required(),
});

const Product = model("product", productSchema);

export { Product, joiSchema, statusJoiSchema };
