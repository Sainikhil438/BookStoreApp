import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookLogo from '../images/BookImage1.jpg'
import './BookComponent.css';
import { useNavigate } from 'react-router-dom';

export default function ActionCard({getbooks,onParticularBook,setGetBook}) {


    const navigate = useNavigate()
    const handleOnClick=()=>
    {
        onParticularBook(getbooks);
        setGetBook(true)
        // navigate("/bookdetails")
    }

    return (
        <div className="book-component-div">
        <Card onClick={handleOnClick} sx={{
            maxWidth: 230,
            marginTop: 3,
            marginLeft: 5,
            height: 172,
            maxHeight: 768,
            height: 330
        }}>
            <div>
                <CardActionArea className='container-1'>
                    <div className='image'>
                        <CardMedia
                            component="img"
                            height="140"
                            image={BookLogo}
                            alt="green iguana"
                            sx={{
                                width: 110,
                                height: 150
                            }}
                        />
                    </div>
                    <CardContent>
                        <div className='details'>
                            <p className='title'>
                                {/* Don't Make Me Think */}
                                {getbooks.bookName}
                                </p>
                            <p className='author'>by {getbooks.author}
                            {/* Steve Krug */}
                            </p>
                            <div><br></br>
                                <span className='stars'>4.5 &#9733;</span>
                                <span>({getbooks.quantity})</span>
                            </div><br></br>
                            <span className='cost'>
                                <b>
                                    {/* Rs.1500 */}
                                    Rs.{getbooks.discountPrice}
                                 </b>
                                <s>
                                    {/* Rs.2000 */}
                                    Rs.{getbooks.price}
                                </s>
                            </span>
                        </div>
                    </CardContent>

                </CardActionArea>
            </div>
        </Card>
        </div>
    );
}