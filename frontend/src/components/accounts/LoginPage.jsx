import { React, useState , useContext } from 'react'
// import {Link } from 'react-router-dom'
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import logo from '../../Resources/572.png'
import {userSignup , userLogin} from '../../server/api';
import {DataContext} from '../../Context/DataProvider';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

//initializing empty values for the login credentials to use in useState hook
const loginInitialValues = {
  username: '',
  password: ''
};

//initializing empty values for the signup credentials to use in useState hook
const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};




const LoginPage = ({isUserAuthenticated}) => {
  
  const [userValue, setuserValue] = useState(loginInitialValues);
  const [account, toggleAccount] = useState('login')
  const [signup, setSignup] = useState(signupInitialValues)
  const [Error, setError] = useState('')
  const {setAccount} = useContext(DataContext)
  const navigate = useNavigate();

  const toggleSignup = ()=>{
    account ==='signup'? toggleAccount('login') : toggleAccount('signup')
  }

  //storing the login credentials entered by user to login.
  const onValueChange = (e) => {
    // console.log(e.target.value, e.target.name)
    setuserValue({...userValue , [e.target.name]:e.target.value})
    
  } 
  
  //storing all the values coming from the signup field to send them to backend.
  const onInputChange = (e)=>{
    setSignup({...signup , [e.target.name]:e.target.value})
    console.log(signup)
  }

  //creating an axios request to the backend with the login credentials to loggin the user.
  const loginUser = async()=>{
     userLogin(userValue)
     .then((response)=>{
      console.log(response)
      // setError('')
      sessionStorage.setItem('accessToken', `Bearer ${response.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.refreshToken}`);
      setAccount({username:response.username , name: response.name})
      navigate('/')
      isUserAuthenticated(true);
     })
     .catch((err)=>{
      // setError('Something went wrong!! Please try again later')
      alert(err);
      console.log(err)
     }) 
    
  }

  
  // sending POST request to the http://localhost:4444/signup with the user credentials to register user for signup.
  const signupUser = async() =>{ 
   
    // let response = await API.userSignup(signup)
   try{ 
    const isUserSignup =await userSignup(signup);
    if(isUserSignup){
      console.log(isUserSignup);
      setSignup(signupInitialValues);
      toggleAccount('login')
    }
    else{
      // setError('Something went wrong!! Please try again.')
      alert('not be able to signup please try again later!!')
    }
   }
    catch(err){
      console.log(err);
    }
  }

  

  
  return (
    <Component>
        <Box>
            <Image src={logo} alt="blog" />
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                        <TextField variant="standard"  onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                        <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>

                        {/* <Text style={{ textAlign: 'center' }}>{}</Text> */}
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                    </Wrapper> 
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                        {Error && <Typography style={{color: 'red'}}>{Error}</Typography>}
                        <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper>
            }
        </Box>
    </Component>
)
}


export default LoginPage