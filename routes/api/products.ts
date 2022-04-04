import express from "express";

import { products } from "../../controllers/";
import { validation, ctrlWrapper, authCurrent } from "../../middleware";
import { joiSchema, statusJoiSchema } from "../../models/product";

const validateMiddleware = validation(joiSchema);

const router = express.Router();

router.get("/", authCurrent, ctrlWrapper(products.getAll));

router.get("/:id", ctrlWrapper(products.getById));

router.post("/", authCurrent, validateMiddleware, ctrlWrapper(products.add));

router.put("/:id", validateMiddleware, ctrlWrapper(products.updateById));

router.patch(
  "/:id/status",
  validation(statusJoiSchema),
  ctrlWrapper(products.updateStatus)
);

router.delete("/:id", ctrlWrapper(products.deleteById));

export default router;
