import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import './ForgotPassword.css'

export default function ForgotPassword() {
    return (
        <div className='parent-container'>
            <div className='form-container'>
                <div className='heading'>
                    Forgot Your Password?
                </div>

                <Card sx={{ maxWidth: 350 }}>
                    <div className='box'>
                        <div className="box-1">
                            <div className="tttt">
                                Enter your email address and we'll send you a link to reset your password.
                            </div>
                        </div>
                        {/* <div className='box-1'>
                            <div>
                                Enter your email address and we'll send you a link to reset your password.
                            </div>
                        </div> */}

                        <div className='box-3'>
                            <TextField className='email' id='emailid' placeholder='Email id' variant='outlined' />
                        </div>

                        <div className='box-4'>
                            <button className='forgot-button' type="submit">Reset Password</button>
                        </div>
                    </div>
                    <div className='create'>
                        <p className='new-account'>CREATE ACCOUNT</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}