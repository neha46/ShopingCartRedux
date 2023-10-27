import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const container=document.getElementById('root')
const root= ReactDOMClient.createRoot(container)
root.render(<App/>)

reportWebVitals();
