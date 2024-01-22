import { Router, Request, Response } from "express";
import { body } from 'express-validator';
const {createUser} = require("../../controller");
const router = Router();

router.post("/profile/create",[
    body('name').notEmpty().withMessage('Name is required'),
    body('authId').notEmpty().withMessage('AuthId is required'),
    body('email').isEmail().withMessage('Invalid Mail id'),
  ] , createUser);

module.exports = {
    profileRouter: router
};