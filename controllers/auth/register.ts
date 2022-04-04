import { Request, Response } from "express";
import { Conflict } from "http-errors";
import bcrypt from "bcryptjs";
import { User } from "../../models";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const result = await User.create({ name, email, password: hashPassword });

  res.status(201).json({
    status: "succees",
    cose: 201,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

export default register;
