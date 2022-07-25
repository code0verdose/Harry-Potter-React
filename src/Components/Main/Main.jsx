import React from 'react';
import './Main.css'
import Item from "../Item/Item";
import '../../data/data.js'
import {data} from "../../data/data";

const Main = ({searchItem, select}) => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="grid">
                            {data
                                .filter(value =>
                                    value.name.toLowerCase().includes(searchItem.toLowerCase().trim()))
                                .map((elem, index) => (
                                    <Item key={index} picture={elem.image} nameTitle={elem.name}
                                          actor={elem.actor} gender={elem.gender}
                                          house={elem.house} wand={elem.wand} alive={elem.alive}/>
                                ))}
                        </div>
                        <div className="likes">
                            <button className="show-liked btn">
                                <svg className="show">
                                    <use href="#like"></use>
                                </svg>
                                Show Liked
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;