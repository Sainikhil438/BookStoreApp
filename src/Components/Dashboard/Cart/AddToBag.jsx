import React from "react";
import './AddToBag.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useState } from "react";
import { createContext } from "react";
import HeaderBar from "../HeaderBar";

// export const UserContext = createContext()
export const UserContext = createContext()


export default function AddToBag() {

    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        count === 0 ? setCount(0) : setCount(count - 1);
    };

    return (
        <>
            <div className="add-items">
                <RemoveCircleOutlineOutlinedIcon
                    sx={{ color: "lightgray", width: 30, height: 30 }}
                    onClick={decrementCount}
                />
                <div className="book-quantity">
                    <p>{count}</p>
                </div>
                <AddCircleOutlineOutlinedIcon
                    sx={{ color: "lightgray", width: 30, height: 30 }}
                    onClick={incrementCount}
                />

            </div>
            <UserContext.Provider value={count}>
                <HeaderBar/>
            </UserContext.Provider>

        </>
    )
}


