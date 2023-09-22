import React from "react";
import SIGNUP from '../Pages/SignUp/SignUp';
import SIGNIN from '../Pages/SignIn/SignIn';
import BookStoreDashboard from '../Dashboard/Dashboard'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ActionCard from "../Dashboard/BookComponent";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import { NavBarLayout } from "./NavBarLayout";
import BookDetails from "../Dashboard/BookDetails";
import MyCartDetails from "../Dashboard/Cart/MyCartDetails";
import CustomerDetails from "../Dashboard/Cart/CustomerDetails";
import OrderSummary from "../Dashboard/Cart/OrderSummary";
import OrderPlaced from "../Dashboard/Cart/OrderPlaced";


export default function BookStoreRouter()
{
    return(
        <div>
            <BrowserRouter>
            <NavBarLayout>
            <Routes>
                <Route exact path={"/"} element={<SIGNIN/>}/>
                <Route path={"/signup"} element={<SIGNUP/>}/>
                <Route path={"/forgotpassword"} element={<ForgotPassword/>}/>
                <Route path={"/bookcomponent"} element={<ActionCard/>}/>
                <Route path={"/bookdetails"} element={<BookDetails/>}/>
                <Route path={"/mycartdetails"} element={<MyCartDetails/>}/>
                <Route path={"/customerdetails"} element={<CustomerDetails/>}/>
                <Route path={"/ordersummary"} element={<OrderSummary/>}/>
                <Route path={"/orderplaced"} element={<OrderPlaced/>}/>
                <Route path={"/dashboard"} element={<BookStoreDashboard/>}/>
            </Routes>
            </NavBarLayout>
            </BrowserRouter>
        </div>
    )
}