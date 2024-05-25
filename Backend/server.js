import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import authRoute from "./routes/authroute.js"
import categoryRoute from "./routes/categoryRoute.js"
import connectDb from './config/db.js'
import cors from "cors";
const app = express();

dotenv.config()

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/auth" , authRoute)
app.use("/api/v1/category" , categoryRoute)
    
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server started at ${process.env.PORT}`);
});