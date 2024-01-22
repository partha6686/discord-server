import { Router, Request, Response } from "express";
const {createUser} = require("../../controller");
const router = Router();

router.post("/profile/create", createUser);

module.exports = {
    profileRouter: router
};