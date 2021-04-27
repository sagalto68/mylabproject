import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import firebase from "firebase/app";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxProvider from './redux';
import theme from './theme';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwNwkqF283hP--aPVQLwbA-NQtQvLZFNM",
  authDomain: "mylab-d934c.firebaseapp.com",
  projectId: "mylab-d934c",
  storageBucket: "mylab-d934c.appspot.com",
  messagingSenderId: "761128400507",
  appId: "1:761128400507:web:807491b90eed3bb6a7d4de",
  measurementId: "G-2JTVNVL8T3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
