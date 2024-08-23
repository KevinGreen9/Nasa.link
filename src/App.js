import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";




const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={  <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                        <Route path='/profile' element={  <Profile posts={props.posts} /> }/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
