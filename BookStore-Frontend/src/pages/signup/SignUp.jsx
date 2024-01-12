import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const userService = new UserService();

  

function SignUp() {
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
                userService.SignUp("/user/registration",data)
                .then(()=>{
                    console.log("successfully registered");
                    setMessage("Registration successful");
                    navigate('/')
                })
                .catch((err)=>{
                    console.log(err);
                    setMessage("Registration failed");
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
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value },fieldState: { error } }) => (
                      <TextField size="small" fullWidth id="outlined-basic" label="Full Name" variant="outlined" value={value}
                      onChange={onChange} 
                      error={!!error}
                      helperText={error ? error.message : ' '} />
                  )}
                  rules={{ required: 'Enter full name' }}
            />
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
            type="email" />
                )}
                  rules={{ required: 'Enter valid email' }}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl size="small" fullWidth variant="outlined" >
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
              <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField size="small" fullWidth id="outlined-basic" label="Mobile Number" variant="outlined"
                      value={value}
                      onChange={onChange} 
                      error={!!error}
                      helperText={error ? error.message : ' '}
                      />
                )}
                rules={{ required: 'enter valid number', pattern: /^([1-9][0-9])?[0-9]{10}$/ }}
              />
                <Button fullWidth type="submit" variant="contained" style={{textTransform: 'none',background: "#A03037 0% 0% no-repeat padding-box",marginTop: 10}}>Signup</Button>
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

export default SignUp
