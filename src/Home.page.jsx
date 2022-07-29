import React from 'react';
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Main from "./Components/Main/Main";
import {useState} from "react";
import {data} from "./data/data";

const Home = ({like, dislike, liked, setLiked}) => {

    const [searchItem, setSearchItem] = useState('');
    const [select, setSelect] = useState('')

    const filteredData = data
        .filter(value =>
            value.name.toLowerCase().includes(searchItem.toLowerCase().trim()) && value.house.includes(select)
        )

    return (
        <>
            <Header/>
            <Search setSearchItem={setSearchItem} setSelect={setSelect}/>
            <Main like={like} dislike={dislike} liked={liked} setLiked={setLiked} filteredData={filteredData}/>
        </>
    );
};

export default Home;