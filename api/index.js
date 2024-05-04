import express from "express";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
