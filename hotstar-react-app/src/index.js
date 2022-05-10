import React from 'react'; // react core library
import ReactDOM from 'react-dom'; // rendering the component 
import './index.css'; // app-wide css
import App from './App'; // custom import of App component
import reportWebVitals from './reportWebVitals'; // for analytics

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
