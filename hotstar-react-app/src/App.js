// App component
/*
  1. import statemenent
  2. comp defn 
      should return JSX 
  3. export 
*/

import Header from './components/shared/Header';
import Footer from './components/shared/Footer/Footer';
import './App.css'; // importing css  
import Home from './components/Home/Home';
import HocDemo from './components/HocDemo/HocDemo';
import About from './components/About/About';
import Support from './components/Support/Support';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UnitTestingDemo from './components/UnitTestingDemo/UnitTestingDemo';
import Login from './components/Auth/Login';
import useToken from './hooks/useToken';

import { getAuth } from "firebase/auth";

// function setToken(userToken) {
//   sessionStorage.setItem('token', userToken);
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   if(userToken){
//     return true
//   }else{
//     return false;
//   } 
// }

// ideal place for us to have the layout 
function App() {

  if(!sessionStorage.getItem('token')){
    console.log('Not Logged In');
    return(
      <Login />
    )
  }

  // every comp should return JSX 
  return (
    <BrowserRouter>
      <Header></Header>

      <main className='mt-5 pt-4 container'>
        <p>Welcome to React JS</p>
        {/* Config the URL's with the matching comp */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hoc-demo" element={<HocDemo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/unit-testing" element={<UnitTestingDemo/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </main>
    
      <Footer />
    </BrowserRouter>
  );
}

export default App; // exporting the App comp
