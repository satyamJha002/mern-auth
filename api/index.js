import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
