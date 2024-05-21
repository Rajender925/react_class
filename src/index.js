import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import Table from './Components/table/table';
import Image from './Components/image/image';
import List from './Components/list/list';
import Form from './Components/forms/form';
import Button from './Components/button/button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Table />
    <Image />
    <List />
    <Form />
    <Button />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
