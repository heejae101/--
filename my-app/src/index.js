import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accommodate from './chapter_07/Accommodate';
import NotificationList from './chapter_06/NotificationList';
import ConfirmButton from './chapter_08/ConfirmButton';
import NewConfirmButton from './chapter_08/NewConfirmButton';
import LandingPage from './chapter_09/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
