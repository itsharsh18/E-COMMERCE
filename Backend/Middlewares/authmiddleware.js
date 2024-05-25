import JWT from "jsonwebtoken";
import { User } from "../models/user.model.js";


// PROTECTED ROUTES -- TOKEN BASED

export const requireSignIN = async(req,res,next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization , process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
       console.log(error); 
    }
}


// admin access 

export const isAdmin = async (req,res,next)=>{
    try {
        const user = await User.findById(req.user._id); // ye id hume requireSignIN se mila hai kaise aise req.user._id is getting from req.user = decode in requireSignIN
        if(user.role !== 1){
            return res.status(401).send({
            message :"Unauthorixzed access"
        }) 
    }else{
        next();
    }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: error,
            success : false
        })
    }
}