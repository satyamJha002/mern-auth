import express from "express";
// import { User } from "../models/user.model";
import { test } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", test);

/* router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}); */

export default router;
