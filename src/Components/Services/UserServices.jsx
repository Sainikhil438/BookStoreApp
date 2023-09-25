import React from "react";
import axios from "axios";


export const signIn = async (obj) => {
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",obj);
    return response;
};

export const signUp = async (obj) => {
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",obj);
    return response;
};