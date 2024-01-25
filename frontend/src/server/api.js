// const axios = require('axios');
import axios from 'axios'


const userSignup = (signup)=>{
    console.log(signup)
    return new Promise((resolve , reject) =>{

      axios({
        method: 'POST',
        url: ' http://localhost:4444/signup',
        data: signup,
        headers: {
          'Content-Type': 'application/json', // Set the correct content type
        }
     
    })
    .then((response) => {
      console.log('Signed In successfully');
      resolve(response.data); // Resolve with the response data
    })
    .catch((err) => {
      console.log(err);
      reject(err); // Reject with the error
    });
})}

const userLogin = (login) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: 'http://localhost:4444/login',
      data: login,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Signed In successfully');
        resolve(response.data); // Resolve with the response data
      })
      .catch((err) => {
        console.log(err);
        reject(err); // Reject with the error
      });
  });
};

export {userSignup , userLogin};

