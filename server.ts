import mongoose from "mongoose";
import app from "./app";

const { DB_HOST, PORT = 3000 } = process.env;

if (DB_HOST) {
  mongoose
    .connect(DB_HOST)
    .then(() => {
      console.log("database connect");
      return app.listen(PORT);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
}

console.log("Don't DB_HOST");
