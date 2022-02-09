import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const UserData = {
  username: 'Tim',
  imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.U_C0bb_QBKWrGZu4bwGEkAHaE_&pid=Api&P=0&w=275&h=185',
  posts: [
    'Post 1',
    'Post 2',
    'Post 3',
  ]
}
ReactDOM.render(
  <React.StrictMode>
    <App UserData={UserData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
