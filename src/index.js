import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HookIndex from './pages/HookIndex';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode가 있으면 console.log에 두번씩 출력된다
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <App />
  <HookIndex />
);

reportWebVitals();
