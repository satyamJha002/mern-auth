import express from "express";
import userRoute from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use("/api/user", userRoute);

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
