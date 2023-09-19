import React, { Component } from "react";
import "./SignIn.css";
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";
import BookStoreLogo from "../../images/BookStoreLogo.png";



class SignIn extends Component {
    render() {
        return (
            <div className="login-container-1">
                <div className="login-pic-container">
                    <img className="login-image" src={BookStoreLogo} alt="BookStoreLogo" />
                    <h3>ONLINE BOOK SHOPPING</h3>
                </div>
                <form className="login-container-2">
                    <div className="login-container-3">
                        <div className="login1"><p className="login2">LOG IN</p></div>
                        <Link className="signup1"><p className="signup2">SIGN UP</p></Link>
                    </div>

                    <div className="login-container-4">
                        {/* <div className="lcontainer-5"> */}
                            <label className="label-1" for='email'>Email id</label>
                            <TextField className="login-field" 
                            // label="Email id" 
                            id='lemail' variant="outlined" autoComplete="off" />

                            <label className="label-2" for='password'>Password</label>
                            <TextField className="login-field" 
                            // label="Password" 
                            id='lpassword' variant="outlined" autoComplete="off" />
                            <p className="pass">Forgot Password?</p>
                        {/* </div> */}
                        {/* <div className="forgotpass"><p className="pass">Forgot Password?</p></div> */}
                        {/* <p className="pass">Forgot Password?</p> */}

                        <button className="lbutton">Login</button>

                        <div className="orline">---------- OR ----------</div>

                        <div className="login-extra-buttons">
                            <button id="fbbutton">Facebook</button>
                            <button id="gbutton">Google</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn