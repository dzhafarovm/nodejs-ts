import { Request, Response } from "express";

const getCurrent = async (req: any, res: Response) => {
  const { email, name } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

export default getCurrent;
