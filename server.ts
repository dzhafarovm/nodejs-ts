import mongoose from "mongoose";

import app from "./app";

const DB_HOST =
  "mongodb+srv://Maks:Maks@cluster0.id8wv.mongodb.net/shop?retryWrites=true&w=majority";

const PORT = 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("DB connect");
    return app.listen(PORT);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
