import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../images/OpenBook.jpeg'
import './ForgotpwdAppBar.css'



export default function ForgotpwdAppBar() {
    

    return (
        <Box sx={{ flexGrow: 1 }} className='forgotappbar-box'>
            <AppBar position="static" className='forgot-appbar'>
                <Toolbar className='forgotappbar-toolbar'>
                    

                    <img className='forgotappbar-logoimage' src={logo} alt="Bookstore logo" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Bookstore
                    </Typography>
                </Toolbar>
            </AppBar>
            
        </Box >
    );
}