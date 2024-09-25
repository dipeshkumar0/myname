import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
<>
  <table border='2px' align='center'>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds FutterKiste</td>
      <td>MAria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <tD>Mexico</tD>
    </tr>
    <caption>Details</caption>
  </table>
  <dl>
    <dt>React JS</dt>
    <dd> - React JS is a free library for makung websites look and feel cool.It's like a special helper for JavaScript.People from Facebook and other communities work together to keep it awesome and <b>upto-date</b> </dd>
    <dt>ReactDOM</dt>
    <dd>-<b>ReactDOM</b> is a package in React that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.</dd>
  </dl>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
