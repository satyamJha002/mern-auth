import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User create successfully" });
  } catch (error) {
    next(error);
  }
};
