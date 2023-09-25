import React from "react";
import { useState, useEffect } from "react";
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import HeaderBar from '../Dashboard/HeaderBar';
import ActionCard from '../Dashboard/BookComponent';
import ForgotpwdAppBar from '../Pages/ForgotPassword/ForgotpwdAppBar';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import BookDetails from '../Dashboard/BookDetails';
import MyCartDetails from '../Dashboard/Cart/MyCartDetails';
import OrderSummary from '../Dashboard/Cart/OrderSummary';
import CustomerDetails from '../Dashboard/Cart/CustomerDetails';
import OrderPlaced from '../Dashboard/Cart/OrderPlaced';
import { RetrieveBooks } from "../Services/UserBookServices";
import './Dashboard.css'

function BookStoreDashboard() {

    const [userBook, setUserBook] = useState([]);

    const retrieveAllBooks = async () => {
        let response = await RetrieveBooks();
        console.log(response.data.result);
        let allData = response.data.result;
        setUserBook(allData);
    }
    useEffect(() => {
        retrieveAllBooks()
    }, []);
    return (
        <div className="outer-container-div">
            <div className="dashboard-div">
                {
                    userBook.map((userBooks) =>
                        <ActionCard _id={userBooks._id} userBooks={userBooks} />
                    )
                }
            </div>
        </div>
    );
}
export default BookStoreDashboard;