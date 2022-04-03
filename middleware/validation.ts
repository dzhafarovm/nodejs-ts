import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";

enum StatusCodes {
  BAD_REQUEST = 400,
  SUCCESS = 200,
}

interface CustomValidationError extends ValidationError {
  status?: StatusCodes;
}

const validation = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    let customError: CustomValidationError;

    if (error) {
      customError = error;
      customError.status = 400;
      next(customError);
    }
    next();
  };
};

export default validation;
