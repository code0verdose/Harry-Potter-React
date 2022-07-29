import React from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {data} from "./data/data";

const Favorites = ({ like, dislike, liked }) => {

    const filteredData = data
        .filter(elem =>
            liked.includes(elem.name)
        )

    return (
        <>
            <Header/>
            <Main filteredData={filteredData} like={like} dislike={dislike} liked={liked}/>
        </>
    );
};

export default Favorites;