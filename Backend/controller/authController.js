import { HashPassword, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";
import {User} from "../models/user.model.js"
import { compare } from "bcrypt";
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address ,question} = req.body;

        // Validation
        if (!name) return res.status(400).send({ success: false, message: "Name is required" });
        if (!email) return res.status(400).send({ success: false, message: "Email is required" });
        if (!password) return res.status(400).send({ success: false, message: "Password is required" });
        if (!phone) return res.status(400).send({ success: false, message: "Phone is required" });
        if (!address) return res.status(400).send({ success: false, message: "Address is required" });

        // Checking the existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered"
            });
        }

        // Registering a user
        const HashedPassword = await HashPassword(password);
        // Saving it
        const user = await new User({ name, email, phone, address, password: HashedPassword , question }).save();
        res.status(201).send({ user, message: "Haa bhai u r registered now", success: true });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error
        });
    }
}




export const loginController = async (req,res)=>{
try {
    const {email , password} = req.body;
    if(!email || !password) return res.send("NAa bro naa gaalat hai yhha ");
   // checking user 
        const user = await User.findOne({email})
        if(!user)return res.send("PLZ REGISTER")

    const matchEqualto = await comparePassword(password , user.password);

    if(!matchEqualto) return res.status(200).send({message : "Invalid password plz try again" , success : false});  

    const token = await JWT.sign({_id:user._id} , process.env.JWT_SECRET , {expiresIn:"7d"});

    res.status(200).send({
        success:true,
        message :"Login success",
        user:{
            name: user.name,
            email : user.email,
            phone: user.phone,
            address:  user.address,
            role: user.role,
        },
        token,
    })
    console.log(token);
    
} catch (error) {
    console.log(error);
}
}

// its a forgot password controller 
export const ForgotPasswordController = async (req,res)=>{
    try {
        const {email , question , newPassword} = req.body;
            if(!email){
                res.status(500).send({
                    message: "Email is required"
                })}
                if(!question){
                    res.status(500).send({
                        message: "Email is required"
                    })}

                    if(!newPassword){
                        res.status(500).send({
                            message: "Email is required"
                        })}
                        // check
                     const user = await User.findOne({email , question})
                     // valdiation
                     if(!user){
                        return res.status(500).send({success: false, message :"Answer is required "})
                     }

                        const HashedPassword = await HashPassword(newPassword);
                        await User.findByIdAndUpdate(user._id, {password:HashedPassword});
                        res.send({
                            success:true,
                            message:  "Password changed successfully"
                        })


    } catch (error) {
        console.log(error);
        res.sendStatus(500).send({
            success:false,
            message :"Something went wrong"
        })
    }
}



// test controller

export const testcontroller = (req,res)=>{
res.send({
    message: "CHECK IT"
})
}