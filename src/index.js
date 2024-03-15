import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './settings/reducers/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOME from './app/pages/HOME';
import USERS from './app/pages/USERS';
import USER from './app/pages/USERS/USER';
import TODO from './app/pages/TODOS/TODO';
import TODOS from './app/pages/TODOS';
import Photos from './app/pages/PHOTOS';
import PHOTO_PAGE from './app/pages/PHOTOS/PHOTO';
import NOTFOUND from './app/pages/NOTFOUND';
import Header from './components/Header';
import LAYOUT from './app/LAYOUT';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route element={<LAYOUT/>}>
                <Route path='/' element={<HOME/>}></Route>
                <Route path='/users' element={<USERS/>}></Route>
                <Route path='/user' element={<USER/>}></Route>
                <Route path='/todo' element={<TODO/>}></Route>
                <Route path='/todos' element={<TODOS/>}></Route>
                <Route path='/photos' element={<Photos/>}></Route>
                <Route path='/photo' element={<PHOTO_PAGE/>}></Route>
                <Route path='*' element={<NOTFOUND/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
     <App />
     </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
