
import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(userToken){
      return true
    }else{
      return false;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    debugger;
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
