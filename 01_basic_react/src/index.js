import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>//bina iske bhi chal jata hai
  //App custom tag hai
  //Js kai through HTML likh paa rahe hai
);

// React apna DOM banata hai virtual DOM phir original DOM sai compare karta hai phir ussi element ko update karta hai
