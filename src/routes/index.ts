// module.exports = {
//     ...require('./Profile/profileRoutes'),
// }

import { Application } from "express";

const {profileRouter} = require("./Profile/profileRoutes");
const {serverRouter} = require("./Server/serverRoutes");

module.exports= (app: Application) =>{
    app.use("/api", profileRouter);
    app.use("/api", serverRouter);
}