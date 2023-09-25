import React, { Component } from "react";
import "./SignIn.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import BookStoreLogo from "../../images/BookStoreLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../Services/UserServices";






function SignIn() {

    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [logindata, setLogindata] = useState({ email: "", password: "" });
    const [errorLogin, setErrorLogin] = useState({ emailError: false, emailHelper: "", passwordError: false, passwordHelper: "" })
    const takeEmail = (event) => {
        setLogindata((prev) => ({ ...prev, email: event.target.value }));
    };
    const takePassword = (event) => {
        setLogindata((prev) => ({ ...prev, password: event.target.value }));
    };
    const navigate = useNavigate();
    const loginButton = async () => {
        let emailTest = emailRegex.test(logindata.email);
        let passwordTest = passwordRegex.test(logindata.password);

        if (emailTest === false) {
            setErrorLogin((prevState) => ({ ...prevState, emailError: true, emailHelper: "Enter correct Email", }));
        } else {
            setErrorLogin((prevState) => ({ ...prevState, emailError: false, emailHelper: "", }));
        } if (passwordTest === false) {
            setErrorLogin((prevState) => ({ ...prevState, passwordError: true, passwordHelper: "Enter correct Password", }));
        } else {
            setErrorLogin((prevState) => ({ ...prevState, passwordError: false, passwordHelper: "", }));
        }console.log(logindata);

        if (emailTest && passwordTest) {
            let response = await signIn(logindata);
            console.log(response);
            localStorage.setItem("AccessToken", response.data.result.accessToken);
            navigate("/dashboard");
        }
    }

    return (
        <div className="login-container-1">
            <div className="login-pic-container">
                <img className="login-image" src={BookStoreLogo} alt="BookStoreLogo" />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>
            <form className="login-container-2">
                <div className="login-container-3">
                    {/* <Link className="login1"><p className="login2">LOG IN</p></Link> */}
                    <Link id="login1" to='/'><p className="login2">LOG IN</p></Link>
                    <Link className="signup1" to="/signup"><p className="signup2">SIGN UP</p></Link>
                    {/* <div><Link id="signup1" to='/signup'>SIGN UP </Link></div> */}

                </div>

                <div className="login-container-4">
                    {/* <div className="lcontainer-5"> */}
                    <div className="login-tfield-1">
                        <label className="label-1" for='email'>Email id</label>
                        <TextField className="login-field"
                            // label="Email id" 
                            name="email"
                            id='lemail' variant="outlined" autoComplete="off"
                            error={errorLogin.emailError}
                            helperText={errorLogin.emailHelper}
                            onChange={takeEmail}
                        />
                    </div>

                    <div className="login-tfield-2">
                        <label className="label-2" for='password'>Password</label>
                        <TextField className="login-field"
                            // label="Password"
                            type="password"
                            name="password"
                            id='lpassword' variant="outlined" autoComplete="off"
                            error={errorLogin.passwordError}
                            helperText={errorLogin.passwordHelper}
                            onChange={takePassword}
                        />
                    </div>

                    <p className="pass">Forgot Password?</p>
                    {/* </div> */}
                    {/* <div className="forgotpass"><p className="pass">Forgot Password?</p></div> */}
                    {/* <p className="pass">Forgot Password?</p> */}

                    {/* <button className="lbutton"><Link to='/bookcomponent' onClick={loginButton}>Login</Link></button> */}
                    <Button className="lbutton" id="lbutton-id" onClick={loginButton}>
                        Login
                    </Button>

                    <div className="orline">---------- OR ----------</div>

                    <div className="login-extra-buttons">
                        <button id="fbbutton">Facebook</button>
                        <button id="gbutton">Google</button>
                    </div>
                </div>
            </form>
        </div>
    );

}
export default SignIn;