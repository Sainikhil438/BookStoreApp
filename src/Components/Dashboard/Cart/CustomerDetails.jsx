import React from "react";
import './CustomerDetails.css';
import TextField from '@mui/material/TextField';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { useState } from "react";


export default function CustomerDetails({handleOrderButton}) {

    // const navigate = useNavigate();
    // const onContinueButton = () =>{
    //     navigate("/ordersummary")
    // }

    const [handleInput, setHandleInput] = useState(false);
    const onContinueButton = () => {
        setHandleInput(true)
        handleOrderButton(handleInput)
    }
    return (
        <div className="cd-outer-container">
            <div className="cd-main-container">
                <div className="cd-container-1">
                    <div className="cd-container-1-1">
                        <p className="cd-details-title">Customer Details</p>
                    </div>
                    <div className="cd-container-1-2">
                        <button className="cd-button-1">Add New Address</button>
                    </div>
                </div>
                <div className="cd-container-2">
                    <div className="cd-container-2-1">
                        <TextField className="cd-fullname"
                            id="cd-fullname-id" placeholder="Full Name" />
                    </div>
                    <div className="cd-container-2-2">
                        <TextField className="cd-mobilenumber"
                            id="cd-mobilenumber-id" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="cd-container-3">
                    <div className="cd-container-3-1">
                        <TextField className="cd-address"
                            id="cd-address-id" placeholder="Address" />
                    </div>
                </div>
                <div className="cd-container-4">
                    <div className="cd-container-4-1">
                        <TextField className="cd-city-town"
                            id="cd-city-town-id" placeholder="city/town" />
                    </div>
                    <div className="cd-container-4-2">
                        <TextField className="cd-state"
                            id="cd-state-id" placeholder="State" />
                    </div>
                </div>
                <div className="cd-container-5">
                    <div className="cd-container-5-1">Type</div>
                    <div className="cd-container-5-2">
                        <RadioButtonUncheckedOutlinedIcon />Home &nbsp; &nbsp;
                        <RadioButtonCheckedOutlinedIcon />Work &nbsp; &nbsp;
                        <RadioButtonUncheckedOutlinedIcon />Other
                    </div>
                </div>

                
                    <div className="cd-container-6">
                        <div className="cd-container-6-1">
                            <button className="cd-button-2" onClick={onContinueButton}>CONTINUE</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}