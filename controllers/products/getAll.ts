import { Request, Response } from "express";
import { Product } from "../../models/";

const getAll = async (req: any, res: Response) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Product.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

export default getAll;
