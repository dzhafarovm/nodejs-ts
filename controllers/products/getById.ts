import { Request, Response } from "express";
import { NotFound } from "http-errors";
import { Product } from "../../models/";

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Product.findOne({ _id: id });

  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

export default getById;
