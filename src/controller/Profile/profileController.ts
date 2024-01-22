import { Request, Response } from "express";
const Models = require("../../models");
import { validationResult } from "express-validator";

const createUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: errors.array()[0]?.msg, errors: errors.array() });
    }
    const { authId, name, email, imageURL } = req.body;
    const user = await Models.UserModel.findOne({ authId: authId });
    if (user) {
      return res.status(200).json({
        user,
        message: "User already exists!!",
      });
    } else {
      await Models.UserModel.create({
        authId,
        name,
        email,
        imageURL,
      });
      return res.status(200).json({
        message: "User created Successfully!!",
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createUser,
};
