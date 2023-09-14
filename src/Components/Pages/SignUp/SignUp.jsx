import React, { Component } from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
//import { Link } from "react-router-dom";
import { Link } from "@mui/material";
import BookStoreLogo from "../../images/BookStoreLogo.png";


class SignUp extends Component {
    render() {
        return (
            <div className="container-1">
                <div className="pic-container">
                    <img className="image" src={BookStoreLogo} alt="BookStoreLogo" />
                    <h3>ONLINE BOOK SHOPPING</h3>
                </div>

                <form className="container-2">
                    <div className="container-3">
                        <Link className="login"><p className="logintext">LOG IN</p></Link>
                        <div className="signup"><p className="signuptext">SIGN UP</p></div>
                    </div>

                    <div className="container-4">

                        <label className="label1" for='fullname'>Full Name</label>
                        <TextField className="tfield"
                        //  label="Full Name"
                         id='fullname' variant="outlined" autoComplete="off"/>


                        <label className="label2" for='email'>Email id</label>
                        <TextField className="tfield" 
                        // label="Email id" 
                        id='email' variant="outlined" autoComplete="off" />


                        <label className="label3" for='password'>Password</label>
                        <TextField className="tfield" 
                        // label="Password" 
                        id='password' variant="outlined" autoComplete="off"/>


                        <label className="label4" for='mobile'>Mobile Number</label>
                        <TextField className="tfield" 
                        // label="Mobile Number" 
                        id='mobile' variant="outlined" autoComplete="off"/>

                        <button className="button">Login</button>
                        {/* <button className="tfield">Signup</button> */}

                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp;