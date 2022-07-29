import './App.css';
import Home from "./Home.page";
import {data} from "./data/data.js";
import {useState} from "react";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Favorites from "./Favorites.page";

const savedLikes = JSON.parse(localStorage.getItem('likedNames')) ?? []

function App() {

    const [liked, setLiked] = useState(savedLikes)
    localStorage.setItem('likedNames', JSON.stringify(liked))

    const like = (name) => setLiked([...liked, name])
    const dislike = (name) => setLiked(liked.filter((elem) => elem !== name))


    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/'
                           element={
                               <Home
                                   like={like}
                                   dislike={dislike}
                                   liked={liked}
                                   setLiked={setLiked}
                               />}
                    />
                    <Route path='/favorite'
                           element={
                               <Favorites
                                   like={like}
                                   dislike={dislike}
                                   liked={liked}
                               />}
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
