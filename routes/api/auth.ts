import express from "express";

import { auth } from "../../controllers/";
import { validation, ctrlWrapper, authCurrent } from "../../middleware";
import { joiRegisterSchema, joiLoginSchema } from "../../models/user";

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

router.post("/login", validation(joiLoginSchema), ctrlWrapper(auth.login));

router.get("/logout", authCurrent, ctrlWrapper(auth.logout));

export default router;
