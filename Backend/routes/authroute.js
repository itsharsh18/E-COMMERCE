import express from "express"
import {registerController , loginController ,testcontroller , ForgotPasswordController} from "../controller/authController.js"
import { isAdmin, requireSignIN } from "../Middlewares/authmiddleware.js";

const router = express.Router();

router.route("/register").post(registerController);

// LOGIN POST 

router.route("/login").post(loginController)

// TEST ROUTE
router.get("/test"  ,requireSignIN, isAdmin,testcontroller);

//Protected route -->>
router.get('/user-auth',requireSignIN,(req,res)=>{
    res.status(200).send({ ok:true });
}) 
 // protected admin route
router.get('/admin-auth',requireSignIN,  isAdmin ,(req,res)=>{
    res.status(200).send({ ok:true });
}) 

router.post('/forgotPassowrd' , ForgotPasswordController)

export default router;  