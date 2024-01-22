// module.exports = {
//     ...require('./Profile/profileRoutes'),
// }

import { Application } from "express";

const {profileRouter} = require("./Profile/profileRoutes");

module.exports= (app: Application) =>{
    app.use("/api", profileRouter);
}