import { Request, Response } from "express";
import { Product } from "../../models/";

const add = async (req: any, res: Response) => {
  const { _id } = req.user;
  const result = await Product.create({ ...req.body, owner: _id });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

export default add;
