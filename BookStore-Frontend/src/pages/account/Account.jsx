import React from 'react'
import './Account.scss'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import bgimage from '../../assets/2766594.png' 
import Login from '../login/Login';
import SignUp from '../signup/SignUp';


const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#A03037',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        fontWeight: 'bold',
    //   fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(23),
      marginRight: theme.spacing(1),
      color: '#878787',
      '&.Mui-selected': {
        color: '#0A0102',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

function Account() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className="account-container">
            <div className="image-section">
                <img className="shopping" src={bgimage}/>
                <span className="shopping-heading">Online Book Shopping</span>
            </div>
            <div className="account-section">
            <Box>
                <Box sx={{ bgcolor: '#FFFFFF',display: 'flex',justifyContent: 'center',alignItems: 'center', width: '100%'}}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                    >
                    <StyledTab label="Login" />
                    <StyledTab  label="Signup" />
                    </StyledTabs>                    
                </Box>
                <Box sx={{p:2}}>
                        { value == 0 ? (
                            window.history.pushState('', 'Login', '/login'),
                            <Login />)
                        :
                        (
                          window.history.pushState('', 'SignUp', '/signup'),
                            <SignUp />)
                        }
                    </Box>
            </Box>
            </div>
        </div>
    )
}

export default Account
