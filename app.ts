import express, { Application, Request, Response, NextFunction } from "express";
import logger from "morgan";
import cors from "cors";

import productsRouter from "./routes/api/products";

interface IError {
  message: string;
  status: number | undefined;
}

const app: Application = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

export default app;

// user: "Maks"
// paswword: "Maks"
// mongodb+srv://Maks:Maks@cluster0.id8wv.mongodb.net/test
