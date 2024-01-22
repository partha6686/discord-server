import express, { Application,Request, Response } from 'express';
const cors = require("cors");
const dotenvConfig = require("dotenv").config;
const connectMongo = require("./helpers/db");
const Routes = require("./routes");

const app:Application = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
const port = process.env.PORT || 8000;
dotenvConfig();
connectMongo();

Routes(app);
  
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});