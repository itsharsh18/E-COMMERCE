import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toasts
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/api/v1/auth/login`, { email, password });
            console.log(res.data); // Log the response data for debugging
            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                console.log("Navigating to Home"); // Debug log
                localStorage.setItem('auth', JSON.stringify(res.data)); // inverted comma mai 'auth' means its a variable and we have to sotre in a string format in localsotrage of a browser 
                navigate('/');
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
                    <h1>LOGIN</h1>
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
                                type="password"
                                className="form-control"
                                placeholder="Shh!! keep it secret"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <div style={{ margin: '10px' }}>
                            <button type="button" className="btn btn-primary btn-block" onClick={handleForgotPassword}>
                                Forgot Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </>
    );
}

export default Login;
