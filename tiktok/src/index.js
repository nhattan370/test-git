import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

function emitEvent(id){
    setInterval(()=>{
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {detail: `Bai hoc thu ${id}`})
        )},1000)
}

emitEvent(1);
emitEvent(2);
emitEvent(3);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
