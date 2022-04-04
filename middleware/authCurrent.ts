import { Request, Response, NextFunction } from "express";
import { Unauthorized } from "http-errors";
import jwt from "jsonwebtoken";

import { User } from "../models";

interface CustomRequest extends Request {
  user?: {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface JwtPayload {
  id: string;
}

const authCurrent = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      throw new Unauthorized("Not authorized");
    }

    const { SECRET_KEY } = process.env;

    if (SECRET_KEY) {
      const { id } = (await jwt.verify(token, SECRET_KEY)) as JwtPayload;
      const user = await User.findById(id);

      if (!user) {
        throw new Unauthorized("Not authorized");
      }

      req.user = user;
    }
    next();
  } catch (error: any) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }

    next(error);
  }
};

export default authCurrent;
