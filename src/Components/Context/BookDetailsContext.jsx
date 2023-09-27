import React, { createContext, useState } from "react";


export const BookContext = createContext();


function BookDetailsContext({ children }){
    const [bookDetails, setBookDetails] = useState([]);

    return(
        <div>
            <BookContext.Provider value={{bookDetails, setBookDetails}}>
                {children}
            </BookContext.Provider>
        </div>
    )
}
export default BookDetailsContext