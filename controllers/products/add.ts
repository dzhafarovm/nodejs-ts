import { Request, Response } from "express";
import productsOperations from "../../models/products";

const add = async (req: Request, res: Response) => {
  const result = await productsOperations.add(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

export default add;
