import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logoimage from '../../assets/education.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router';
import auth from '../../auth';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Header.scss'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
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
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        color: '#000000',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('md')]: {
        width: '550px',
      }
    },
  }));

function Header(props) {
  const items = useSelector(state=>state.items);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);
  const email = localStorage.getItem("userName")
  const handleCart = () => {
    navigate('/cart');
  }
  const handleLogo = () => {
    navigate('/dashboard');
  }
  const handleLogoutPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleWishlist = () => {
    navigate("/wishlist");
  }
  const handleLogout = () => {
    localStorage.clear();
    auth.logout(()=>{
      navigate("/");
    })
  }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{backgroundColor: '#A03037'}}>
                <Toolbar>
                    <Box sx={{marginLeft: '13%',display: 'flex'}}>
                        <img onClick={handleLogo} style={{marginRight: '6px',cursor: 'pointer'}} src={logoimage}/>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block',marginLeft: '5%' } }}
                        >
                            Bookstore
                        </Typography>
                    </Box>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon sx={{color: '#9D9D9D'}}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=> props.setSearchWord(e.target.value)}
                    />
                </Search>
                <Box sx={{ flexGrow: 1}} />
                    <Box sx={{marginRight: '1%'}}>
                        <PersonOutlineOutlinedIcon onClick={handleLogoutPopover} sx={{color: '#f1f1f1',cursor: 'pointer'}}/>
                        <div>
                        <span className="username">{email.substring(0, email.lastIndexOf("@"))}</span>
                        </div>
                    </Box>
                    <Box sx={{marginRight: '15%'}}>
                      <Badge badgeContent={items.items.length}>
                        <ShoppingCartOutlinedIcon onClick={handleCart} sx={{color: '#f1f1f1',cursor: 'pointer'}}/>
                      </Badge>
                      <div>
                        <span className="cart-label">cart</span>
                      </div>
                    </Box>
                </Toolbar>
            </AppBar>
            </Box>
            <Popover
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Typography sx={{display: 'flex',flexDirection:'column', paddingLeft:'10px',paddingRight: '10px',paddingTop: '20px', textAlign: 'center' }}>
                <span className="popover-heading">Hello {email.substring(0, email.lastIndexOf("@"))},</span>
                  <div className="wishlist">
                    <FavoriteBorderOutlinedIcon onClick={handleWishlist} fontSize="small" sx={{borderColor: 'grey',marginRight: '10px', cursor: 'pointer',marginTop:'10px'}}/>
                    <span className="wishlist-text">My Wishlist</span>
                  </div>
                  <Button fullWidth onClick={handleLogout} variant="outlined" sx={{color: '#A03037',borderColor: '#A03037',marginBottom: '20px',marginTop: '10px'}} >Logout</Button>
                </Typography>
            </Popover>
        </div>
    )
}

export default Header
