import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import HookIndex from './pages/HookIndex';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from './pages/RouterIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode가 있으면 console.log에 두번씩 출력된다
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <App />
  // <HookIndex />
  <BrowserRouter>
    <RouterIndex />
  </BrowserRouter>
);

reportWebVitals();
