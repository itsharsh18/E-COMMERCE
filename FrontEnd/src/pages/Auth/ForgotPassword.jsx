import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toasts
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [question, setQuestion] = useState("");

    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/api/v1/auth/forgotPassowrd`, { email, newPassword , question });
            console.log(res.data); // Log the response data for debugging
            if (res.data.success) {
                toast.success(res.data.message);
           
                console.log("Navigating to Home"); // Debug log
                navigate('/login'); 
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgotPassword');
    };
    return (
        <>
            <div className="register-container">
                <div className="register-card">
                    <h1>ResetPassword</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter  ur fav food which u entered while registeration"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Shh!! keep it secret"
                                value={newPassword}
                                onChange={(e) => setnewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        
                    </form>
                </div>
            </div>
            <Toaster />
        </>
    );

}


export default ForgotPassword