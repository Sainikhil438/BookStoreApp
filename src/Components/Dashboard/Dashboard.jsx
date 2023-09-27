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
    const [BookSelected, setBookSelected] = useState()

    const [getBook, setGetBook] = useState(false);
    const retrieveAllBooks = async () => {
        let response = await RetrieveBooks();
        console.log(response.data.result);
        let allData = response.data.result;
        setUserBook(allData);
    }
    useEffect(() => {
        retrieveAllBooks()
    }, []);

    const displayAllBooks = () => {
        return userBook.map((book) => (

            <div key={book._id} className="book-card-div" >
                <ActionCard
                    getbooks={book}
                    onParticularBook={setBookSelected}
                    setGetBook={setGetBook}
                />
                {console.log("books",  book)}
            </div >)
        )
    }

    return (
        <div className="outer-container-div">
            <div className="dashboard-div">

            {getBook?<BookDetails getparticularbook={BookSelected} setGetBook={setGetBook}/>:displayAllBooks()}
            {/* {BookSelected?<BookDetails getparticularbook={BookSelected}/>:displayAllBooks()} */}
                
            </div>
        </div>
    );
}
export default BookStoreDashboard;