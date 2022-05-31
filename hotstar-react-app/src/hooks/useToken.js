
import { useState } from 'react';

export default function useToken() {
  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem('token');
  //   //const userToken = JSON.parse(tokenString);
  //   // if(tokenString){
  //   //   return true
  //   // }else{
  //   //   return false;
  //   // }
  //   return tokenString;

  // };

  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const saveToken = userToken => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
