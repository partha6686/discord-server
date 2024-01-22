import { Request, Response } from "express";
const Models = require("../../models");

const getAllServersByMembers = async (req:Request, res:Response) => {
    return res.status(200).json({message: "getAllServersByMembers"})
}

const createServer = async (req:Request, res:Response) => {
    return res.status(200).json({message: "Crerate Server"}) 
}

module.exports = {
    getAllServersByMembers,
    createServer
}