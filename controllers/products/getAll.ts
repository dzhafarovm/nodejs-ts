import { Request, Response } from "express";
import productsOperations from "../../models/products";

const getAll = async (req: Request, res: Response) => {
  const products = await productsOperations.getAll();

  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

export default getAll;
