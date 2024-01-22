import { Request, Response } from "express";

const createUser = async (req:Request,res:Response) => {
    console.log("HITTT");
}

module.exports = {
    createUser
}