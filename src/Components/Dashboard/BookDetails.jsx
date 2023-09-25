import React from "react";
import BookDisplay from '../images/BookImage1.jpg';
import image2 from '../images/Image46.png'
import './BookDetails.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import AddToBag from "./Cart/AddToBag";


export default function BookDetails() {

    const [bagInput, setBagInput] = useState(false);
    const handleAddToBag = () => {
        setBagInput(!bagInput)
    }


    const navigate = useNavigate()
    const handleOnClick=()=>
    {
        navigate("/mycartdetails")
    }
    return (
        <div className="BookDetails-container1">
            <div className="Book-display-heading">
                    <p>Home/My cart</p>
                </div>
            <div className="BookDetails-container2">
                <div className="BookDetails-container3">
                    <div className="small-image1-div"><img className="small-image1" src={BookDisplay} /></div>
                    <div className="small-image2-div"><img className="small-image2" src={image2} /></div>
                </div>
                <div className="BookDetails-container4">
                    <div className="main-book-image-div">
                        <img className="main-book-image" src={BookDisplay} />
                    </div>
                    <div className="main-book-options">

                        {
                            bagInput ? <AddToBag/> :
                        <button className="mb-button-1" onClick={handleAddToBag}>ADD TO BAG</button>

                        }
                        <button className="mb-button-2">♥ WHISHLIST</button>
                    </div>
                </div>
                <div className="BookDetails-container5">
                    <div className="BookDetails-container5-1">
                        {/* <p className="main-book-description1">Don't Make Me Think</p> */}
                        <div className="book-title-div"><p className='book-title'>Don't Make Me Think</p></div>
                        <div className="author-name-div"><p className='author-name'>by Steve Krug</p></div>
                        <div className="stars-div"><br></br>
                            <span className='stars-rating'>4.5 &#9733;</span>
                            <span>(20)</span>
                        </div><br></br>
                        <div className="book-cost-div">
                            <span className='cost-of-book'>
                                <b className="book-price">Rs.1500</b>
                                <s>Rs.2000</s>
                            </span>
                        </div>
                    </div>
                    <hr className="horizontal-1" />
                    <div className="BookDetails-container5-2">
                        <div className="Book-Details-title">
                            <p className="book-title-details">&#8226; Book Details</p>
                        </div>
                        <div className="Book-Details-description">
                            <p className="book-description-details">Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design.
                                Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability.</p>
                        </div>
                    </div>
                    <hr className="horizontal-1" />
                    <div className="BookDetails-container5-3">
                        <div className="feedback-title-div"><p className="feedback-title">Customer Feedback</p>
                        </div>
                        <div className="rating-div">
                            <div className="rating-title">
                                <p>Overall rating</p>
                            </div>
                            <div className="rating-stars-display">
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                            </div>
                            <div className="rating-comment-section">
                                <TextField className="comment-text-field" id="comment-text-field-id" placeholder="Write your review" autoComplete="off" />
                            </div>
                            <div className="submit-button-div">
                                <button className="submit-button">Submit</button>
                            </div>
                        </div>

                    </div>

                    <div className="BookDetails-container5-4">
                        <div className="comment-div1">
                            <div className="individual-comment-1">
                                <Avatar className="name-icon">SP</Avatar>Sai Pavan
                            </div>
                            <Rating name="readonly"value="4"/>
                            <p className="comment-description">
                                Good Product.Even though the translation could have been better,
                                Chanakya's neeti are thought provoking. Chanakya has written on
                                many different topics and his writings are succinct.
                            </p>
                        </div>
                        <div className="comment-div1">
                            <div className="individual-comment-1">
                                <Avatar className="name-icon">SR</Avatar>Srikanth
                            </div>
                            <Rating name="readonly"value="3"/>
                            <p className="comment-description">
                                Good Product.Even though the translation could have been better,
                                Chanakya's neeti are thought provoking. Chanakya has written on
                                many different topics and his writings are succinct.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}