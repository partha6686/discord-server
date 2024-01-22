import { Router, Request, Response } from "express";
import { body } from "express-validator";
const { getAllServersByMembers, createServer } = require("../../controller");
const router = Router();

// router.post("/profile/create",[
//     body('name').notEmpty().withMessage('Name is required'),
//     body('authId').notEmpty().withMessage('AuthId is required'),
//     body('email').isEmail().withMessage('Invalid Mail id'),
//   ] , createUser);

router.post("/server/create", createServer);
router.get("/server/member/:memberId", getAllServersByMembers);

module.exports = {
  serverRouter: router,
};
