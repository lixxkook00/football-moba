import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

const token = sessionStorage.getItem("token")

// axios.defaults.baseURL = 'http://192.168.1.56:8080/';

// axios.defaults.baseURL = 'http://143.198.208.59:8080';
axios.defaults.baseURL = 'https://apiv1.mobatechgaming.com/';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    // Edit request config
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
