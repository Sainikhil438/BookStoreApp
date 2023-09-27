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
import logo from '../images/OpenBook.jpeg';
import './HeaderBar.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import UserContext from "../Dashboard/Cart/AddToBag";
import { UserContext } from './Cart/AddToBag';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FCFCFC',
    //   '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    //   },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        color: '#9D9D9D'
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9D9D9D'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));

export default function HeaderBar() {
    // const contextComponent = useContext(UserContext);
    const contextValue = useContext(UserContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const navigate = useNavigate();
    const handleLogout = () => {
        if (localStorage.key) {
            localStorage.removeItem("AccessToken")
        }
        navigate("/")
    }

    const handleClickCart = () => {
        navigate("/mycartdetails")
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>LogOut</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {/* <AccountCircle /> */}
                    <PersonOutlineOutlinedIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>

    );
    
    // console.log("This is " + contextValue )
    return (
        <Box sx={{ flexGrow: 1 }} className='headerbar-box'>
            <AppBar position="fixed" className='headerbar-appbar'>
                <Toolbar className='headerbar-toolbar'>
                    <img className='headerbar-logo' src={logo} alt="Bookstore logo" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Bookstore
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <div className='headerbar-icon-container'>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                {/* <AccountCircle /> */}

                                {/* <div className='icon-container'> */}
                                <div className='headerbar-profile-container'>
                                    <div className='headerbar-profile-icon'><PersonOutlineOutlinedIcon /></div>
                                    <div className='headerbar-profile'><p>Profile</p></div>

                                </div>


                            </IconButton>

                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <div className='headerbar-cart-container' onClick={handleClickCart}>
                                    <div className='headerbar-cart-icon'>
                                        <Badge badgeContent={contextValue}>
                                            <ShoppingCartOutlinedIcon color="white"/>
                                            {/* </ShoppingCartOutlinedIcon> */}
                                        </Badge>

                                    </div>

                                    <div>
                                        <p className='headerbar-cart'>Cart</p>
                                    </div>
                                </div>
                            </IconButton>

                        </Box>
                    </div>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}