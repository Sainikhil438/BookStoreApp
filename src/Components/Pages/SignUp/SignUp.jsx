import React, { Component } from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import BookStoreLogo from "../../images/BookStoreLogo.png";
import { useState } from "react";
import Button from "@mui/material/Button";




function SignUp() {

    const fullnameRegex = /^[a-zA-Z ]{2,40}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const mobilenumberRegex = /^\d{10}$/;

    const [data, setData] = useState({ fullname: "",email:"", password:"", mobilenumber:""});
    const [errorMessage, setErrorMessage] = useState({ fullnameError: false, fullnameHelper: "", emailError: false, emailHelper: "", passwordError:"", passwordHelper:"", mobilenumberError:"", mobilenumberHelper:""})
    const takeFullname = (event) => {
        setData((prev) => ({ ...prev, fullname: event.target.value }));
    };
    const takeEmail = (event) => {
        setData((prev) => ({ ...prev, email: event.target.value }));
    };
    const takePassword = (event) => {
        setData((prev) => ({ ...prev, password: event.target.value }));
    };
    const takeMobilenumber = (event) => {
        setData((prev) => ({ ...prev, mobilenumber: event.target.value }));
    };

    const loginButton = async () => {
        let fullnameTest = fullnameRegex.test(data.fullname);
        let emailTest = emailRegex.test(data.email);
        let passwordTest = passwordRegex.test(data.password);
        let mobilenumberTest = mobilenumberRegex.test(data.mobilenumber);
        if (fullnameTest === false) {
            setErrorMessage((prevState) => ({ ...prevState, fullnameError: true, fullnameHelper: "Enter correct FullName", }));
        } else {
            setErrorMessage((prevState) => ({ ...prevState, fullnameError: false, fullnameHelper: "", }));
        } if (emailTest === false) {
            setErrorMessage((prevState) => ({ ...prevState, emailError: true, emailHelper: "Enter correct Email", }));
        } else {
            setErrorMessage((prevState) => ({ ...prevState, emailError: false, emailHelper: "", }));
        } if (passwordTest === false) {
            setErrorMessage((prevState) => ({ ...prevState, passwordError: true, passwordHelper: "Enter correct Password", }));
        } else {
            setErrorMessage((prevState) => ({ ...prevState, passwordError: false, passwordHelper: "", }));
        } if (mobilenumberTest === false) {
            setErrorMessage((prevState) => ({ ...prevState, mobilenumberError: true, mobilenumberHelper: "Enter correct Mobile Number", }));
        } else {
            setErrorMessage((prevState) => ({ ...prevState, mobilenumberError: false, mobilenumberHelper: "", }));
        }

    }


    return (
        <div className="signup-container-1">
            <div className="signup-pic-container">
                <img className="signup-image" src={BookStoreLogo} alt="BookStoreLogo" />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>

            <form className="signup-container-2">
                <div className="signup-container-3">
                    <Link className="login" to='/'><p className="signup-logintext">LOG IN</p></Link>
                    <Link className="signup" to='/signup'><p className="signup-text">SIGN UP</p></Link>
                </div>

                <div className="signup-container-4">
                    <div className="signup-tfield-1">
                        <label className="signup-label1" for='fullname'>Full Name</label>
                        <TextField className="signup-tfield"
                            //  label="Full Name"
                            name="fullname"
                            id='signup-fullname' variant="outlined" autoComplete="off"
                            error={errorMessage.fullnameError}
                            helperText={errorMessage.fullnameHelper}
                            onChange={takeFullname}
                        />
                    </div>

                    <div className="signup-tfield-2">
                        <label className="signup-label2" for='email'>Email id</label>
                        <TextField className="signup-tfield"
                            // label="Email id" 
                            name="email"
                            id='signup-email' variant="outlined" autoComplete="off"
                            error={errorMessage.emailError}
                            helperText={errorMessage.emailHelper}
                            onChange={takeEmail}
                        />
                    </div>



                    <div className="signup-tfield-3">
                        <label className="signup-label3" for='password'>Password</label>
                        <TextField className="signup-tfield"
                            // label="Password"
                            type="password" 
                            name="password"
                            id='signup-password' variant="outlined" autoComplete="off" 
                            error={errorMessage.passwordError}
                            helperText={errorMessage.passwordHelper}
                            onChange={takePassword}
                            />
                    </div>


                    <div className="signup-tfield-4">
                        <label className="signup-label4" for='mobile'>Mobile Number</label>
                        <TextField className="signup-tfield"
                            // label="Mobile Number" 
                            name="mobilenumber"
                            id='signup-mobile' variant="outlined" autoComplete="off" 
                            error={errorMessage.mobilenumberError}
                            helperText={errorMessage.mobilenumberHelper}
                            onChange={takeMobilenumber}
                            />
                    </div>

                    <Button className="signup-login-button" id="signup-login-button-id" onClick={loginButton}>Login</Button>
                    {/* <button className="tfield">Signup</button> */}

                </div>
            </form>
        </div>
    );
}
export default SignUp;