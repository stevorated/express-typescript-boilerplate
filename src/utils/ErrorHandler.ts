import { Response, NextFunction } from "express";
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

const isProd = process.env.NODE_ENV === 'production';

export const notFoundError = () => {
  throw new HTTP404Error('Route not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    !isProd && console.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  !isProd && console.warn(err);
  if (isProd) {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
};