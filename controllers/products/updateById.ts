import { Request, Response } from "express";
import { NotFound } from "http-errors";
import productsOperations from "../../models/products";

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await productsOperations.updateById(id, req.body);

  if (!result) {
    throw new NotFound(`Product with id=${id} not foundx`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

export default updateById;
