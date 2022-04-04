import { Request, Response } from "express";
import { Unauthorized } from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models";

const logout = async (req: any, res: Response) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204);
};

export default logout;
