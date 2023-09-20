import React from "react";
import './OrderSummary.css';
import BookImage from '../../images/BookImage1.jpg';


export default function OrderSummary() {
    return (
        <div className="summary-main-container">
            <div className="summary-container">
                <div className="summary-subcontainer">
                    <div className="summary-details-1">
                        <p className="order-summary-title">Order summary</p>
                    </div>
                    <div className="summary-details-2">
                        <div className="summary-image-div">
                            <img className="summary-image" src={BookImage} alt="bookimage" />
                        </div>
                        <div className="summary-book-details-div">
                            <div className="summary-book-details-1">
                                <p>Don't Make Me Think</p>
                            </div>
                            <div className="summary-book-details-2">
                                <p className="summary-author-name">by Steve Krug</p>
                            </div>
                            <div className="summary-book-details-3">
                                <span className="summary-book-price">
                                    <b className="summary-price-amount">Rs.1500</b>
                                    {/* <s>Rs.2000</s> */}
                                </span>
                                <span className="summary-book-price-2">
                                    <s className="summary-price-amount-2">Rs.2000</s>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="summary-details-3">
                    {/* <div className="summary-button-div">
                            <button className="summary-button-1">CHECKOUT</button>
                        </div> */}
                        <button className="summary-button-1">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}