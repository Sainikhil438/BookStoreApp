import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookLogo from '../images/BookImage1.jpg'
import './BookComponent.css'

export default function ActionCard() {
    return (
        <Card sx={{
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
                            <p className='title'>Don't Make Me Think</p>
                            <p className='author'>by Steve Krug</p>
                            <div><br></br>
                                <span className='stars'>4.5 &#9733;</span>
                                <span>(20)</span>
                            </div><br></br>
                            <span className='cost'>
                                <b>Rs.1500</b>
                                <s>Rs.2000</s>
                            </span>
                        </div>
                    </CardContent>

                </CardActionArea>
            </div>
        </Card>
    );
}