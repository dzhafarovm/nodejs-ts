import { Request, Response } from "express";
import { NotFound } from "http-errors";
import productsOperations from "../../models/products";

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await productsOperations.deleteById(id);

  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }

  // res.status(204).json()

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

export default deleteById;
