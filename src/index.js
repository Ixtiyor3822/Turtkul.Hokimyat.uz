import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let customer = [
  {
    id:1, toifa: 'Birinchi toifa muroajatchi', ismi: 'Ixtiyor', familiyasi: 'Sadullayev'
  },
  {
    id:2, toifa: 'Ikkinchi toifa muroajatchi', ismi: 'Fozil', familiyasi: 'Eshimov'
  },
  {
    id:3, toifa: 'Uchunchi toifa muroajatchi', ismi: 'Sarvar', familiyasi: 'Yusupboyev'
  },
  {
    id:4, toifa: 'To`rtinchi toifa muroajatchi', ismi: 'Siraj', familiyasi: 'Madaminov'
  },
  {
    id:5, toifa: 'Beshinchi toifa muroajatchi', ismi: 'Jaqsibay', familiyasi: 'Hakimov'
  }
]


ReactDOM.render(
  <React.StrictMode>
    <App customer={customer}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
