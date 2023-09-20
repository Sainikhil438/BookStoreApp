import React from "react";
import OrderImage from '../../images/OrderSuccessful.png';
import './OrderPlaced.css';

export default function OrderPlaced() {
    return (
        <div className="order-outer-container">
            <div className="order-main-container">
                <div className="order-container-1">
                    <img className="order-image" src={OrderImage} alt="OrderImage" />
                </div>
                <div className="order-container-2">
                    <div className="order-container-2-1">
                        <p className="order-message">hurray!!! your orderis confirmed
                            the order id is #123456 save the order id for
                            further communication..</p>

                    </div>
                </div>
                <div className="order-container-3">
                    <div className="order-container-3-1">
                        <table className="order-details-tale">
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>+91 9898612345</td>
                                <td>42, 14th Main, 15th Cross, HSR Layout,
                                    Bangalore 560034
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="order-container-4">
                    <button className="order-button-1">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    );
}