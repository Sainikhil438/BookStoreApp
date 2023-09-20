import React, { Component } from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
//import { Link } from "react-router-dom";
import { Link } from "@mui/material";
import BookStoreLogo from "../../images/BookStoreLogo.png";


// 
function SignUp() {
    return (
        <div className="signup-container-1">
            <div className="signup-pic-container">
                <img className="signup-image" src={BookStoreLogo} alt="BookStoreLogo" />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>

            <form className="signup-container-2">
                <div className="signup-container-3">
                    <Link className="login"><p className="signup-logintext">LOG IN</p></Link>
                    <div className="signup"><p className="signup-text">SIGN UP</p></div>
                </div>

                <div className="signup-container-4">

                    <label className="signup-label1" for='fullname'>Full Name</label>
                    <TextField className="signup-tfield"
                        //  label="Full Name"
                        id='signup-fullname' variant="outlined" autoComplete="off" />


                    <label className="signup-label2" for='email'>Email id</label>
                    <TextField className="signup-tfield"
                        // label="Email id" 
                        id='signup-email' variant="outlined" autoComplete="off" />



                    <label className="signup-label3" for='password'>Password</label>
                    <TextField className="signup-tfield"
                        // label="Password" 
                        id='signup-password' variant="outlined" autoComplete="off" />


                    <label className="signup-label4" for='mobile'>Mobile Number</label>
                    <TextField className="signup-tfield"
                        // label="Mobile Number" 
                        id='signup-mobile' variant="outlined" autoComplete="off" />

                    <button className="signup-login-button">Login</button>
                    {/* <button className="tfield">Signup</button> */}

                </div>
            </form>
        </div>
    );
}
export default SignUp;