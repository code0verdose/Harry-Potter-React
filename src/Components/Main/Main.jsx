import React from 'react';
import './Main.css'
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const Main = ({filteredData, like, dislike, liked}) => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="grid">
                            {filteredData
                                .map((elem, index) => (
                                    <Item
                                        isLiked={liked.includes(elem.name)}
                                        like={like}
                                        dislike={dislike}
                                        liked={liked}
                                        key={index}
                                        {...elem}
                                    />
                                ))}
                        </div>
                        <div className="likes">
                            <button className="show-liked btn">
                                <svg className="show">
                                    <use href="#like"></use>
                                </svg>
                                <Link to="/favorite"> Show Liked </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;