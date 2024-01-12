import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useForm, Controller } from "react-hook-form";
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import auth from '../../auth';

const userService = new UserService();


const Root = styled('div')(({ theme }) => ({
    marginLeft: 80,
    width: '50%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
  

function Login() {

  const [openSnackbar, setSnackbarOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
  }

  setSnackbarOpen(false);
  };
    const navigate = useNavigate();
      const { handleSubmit,control } = useForm();
  
      const onSubmit = data => {
        setSnackbarOpen(true);
            console.log(data);
            console.log("validation successful");
            userService.SignIn("/user/login",data)
            .then((res)=>{
                console.log(res);
                localStorage.setItem("userName",data.email);
                console.log("Login successful");
                localStorage.setItem("token",res.data.token);
                setMessage("Login successful");
                setTimeout(()=>{
                auth.login(()=>{
                  navigate('/dashboard');  
              }) },2000);             
            })
            .catch((err)=>{
                setMessage("Login failed");
                console.log(err);
            });
      
        };

      const [passwordShown, setPasswordShown] = useState(false);
      const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    return (
        <div>
            <Box sx={{margin: '28px',minHeight: '340px'}}>
              <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField size="small" fullWidth id="outlined-basic" label="Email Id" variant="outlined" 
                value={value}
                      onChange={onChange} 
                error={!!error}
            helperText={error ? error.message : ' '}
            type="email"/>
            )}
                  rules={{ required: 'Enter valid email' }}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl size="small" fullWidth variant="outlined">
                    <TextField
                        fullWidth
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : ' '}         
                        InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePassword}
                            edge="end"
                            >
                            {passwordShown ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),}}
                    />
                </FormControl>
                 )}
                 rules={{ required: 'Password required' }}
               />
                <Button fullWidth type="submit" variant="contained" style={{textTransform: 'none',background: "#A03037 0% 0% no-repeat padding-box",marginTop: 20}}>Login</Button>
                <Root sx={{marginTop: 3}}> 
                    <Divider style={{fontSize: '18px',fontWeight: 'bolder'}}>OR</Divider>
                </Root>
                <Box style={{display: 'flex',marginTop: 20, gap: 10 }}>
                <Button fullWidth variant="contained" style={{textTransform: 'none',background: "#4266B2 0% 0% no-repeat padding-box"}}>Facebook</Button>
                <Button fullWidth variant="contained" style={{textTransform: 'none',color: '#0A0102',background: "#F5F5F5 0% 0% no-repeat padding-box"}}>Google</Button>
                </Box>
                </form>
                <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleClose} message={message}  
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}>              
                </Snackbar>
            </Box>
            
        </div>
    )
}

export default Login
