import express from "express";

import { users } from "../../controllers/";
import { ctrlWrapper, authCurrent } from "../../middleware";

const router = express.Router();

router.get("/current", authCurrent, ctrlWrapper(users.getCurrent));

export default router;
