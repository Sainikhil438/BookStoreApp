import React from "react";
import Book from '../../images/BookImage1.jpg';
import './MyCartDetails.css';
// import PinDropIcon from '@mui/icons-material/PinDrop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';


export default function MyCartDetails() {
    return (
        <div className="cart-full-container">
            <div className="cart-main-container">
                <div className="cart-display-heading">
                    <p>Home/My cart</p>
                </div>
                <div className="cart-subcontainer-1">
                    <div className="cart-details-1">
                        <div className="cart-title-div">
                            <p className="cart-title">My cart(1)</p>
                        </div>
                        <div className="cart-location-div">
                            <div className="cart-location">
                                <div className="cart-location-1">
                                    {/* <PinDropIcon sx={{color:"red"}}/> */}
                                    <LocationOnIcon sx={{ color: "#A03037" }} />
                                    <p>Use current location</p>
                                </div>
                                <div className="cart-location-2">
                                    <p className="triangle-symbol">&#x25BC;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-details-2">
                        <div className="cart-book-image">
                            <img className="cart-book-image-1" src={Book} alt="book" />
                        </div>
                        <div className="cart-book-details">
                            <div className="cart-book-details-1">
                                <p>Don't Make Me Think</p>
                            </div>
                            <div className="cart-book-details-2">
                                <p className="author-name-cart">by Steve Krug</p>
                            </div>
                            <div className="cart-book-details-3">
                                <span className="cart-book-price">
                                    <b className="cart-price-amount">Rs.1500</b>
                                    {/* <s>Rs.2000</s> */}
                                </span>
                                <span className="cart-book-price-2">
                                    <s className="cart-price-amount-2">Rs.2000</s>
                                </span>
                            </div>
                            <div className="cart-book-details-4">
                                <div className="cart-number-change">
                                    {/* <Avatar
                                    sx={{ backgroundColor: "white", border: "1px solid lightgray", color: "black", width: 25, height: 25 }}>
                                    -</Avatar> */}
                                    <RemoveCircleOutlineOutlinedIcon
                                        sx={{ color: "lightgray", width: 30, height: 30 }}
                                    />
                                    <div className="number-of-books">
                                        <p>1</p>
                                    </div>
                                    <AddCircleOutlineOutlinedIcon
                                        sx={{ color: "lightgray", width: 30, height: 30 }}
                                    />
                                    {/* <Avatar
                                    sx={{ backgroundColor: "white", border: "1px solid lightgray", color: "black", width: 25, height: 25 }}>
                                    +</Avatar> */}
                                </div>
                                <div className="remove-description">
                                    <p>Remove</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-details-3">
                        <div className="cart-button-div">
                            <button className="cart-button-1">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                <div className="cart-subcontainer-2">
                    <div className="address-details-div">
                        <p className="address-details">Address Details</p>
                    </div>
                </div>
                <div className="cart-subcontainer-3">
                    <div className="order-details-div">
                        <p className="order-details">Order summary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}