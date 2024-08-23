import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
    {id: 1, message: 'Hi', likesCount: 17},
    {id: 1, message: 'How about travel?', likesCount: 23}
]

let dialogs = [
    {id: 1, name: 'Roman'},
    {id: 1, name: 'Andrei'},
    {id: 1, name: 'Sergei'},
    {id: 1, name: 'Ivan'},
    {id: 1, name: 'Victor'},
    {id: 1, name: 'Nikita'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'How about travel?'},
    {id: 1, message: 'Good idea'},
    {id: 1, message: 'Good idea'},
    {id: 1, message: 'Good idea'},
    {id: 1, message: 'Good idea'}
]
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
