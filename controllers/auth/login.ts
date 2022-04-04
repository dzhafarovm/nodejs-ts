import { Request, Response } from "express";
import { Unauthorized } from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Unauthorized(`Email ${email} not found`);
  }

  const passwordCompare = bcrypt.compareSync(password, user.password);

  if (!passwordCompare) {
    throw new Unauthorized(`Password wrong`);
  }

  const { SECRET_KEY } = process.env;

  if (SECRET_KEY) {
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    await User.findByIdAndUpdate(user._id, { token });

    res.json({
      status: "succees",
      code: 200,
      data: {
        token,
      },
    });
  }
};

export default login;
