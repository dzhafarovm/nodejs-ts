import express from "express";
import { products } from "../../controllers/index";
import { validation, ctrlWrapper } from "../../middleware";
import { productSchema } from "../../schemas";

const validateMiddleware = validation(productSchema);

const router = express.Router();

router.get("/", ctrlWrapper(products.getAll));

router.get("/:id", ctrlWrapper(products.getById));

router.post("/", validateMiddleware, ctrlWrapper(products.add));

router.put("/:id", validateMiddleware, ctrlWrapper(products.updateById));

router.delete("/:id", ctrlWrapper(products.deleteById));

export default router;
