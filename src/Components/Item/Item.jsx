import React from 'react';
import './Item.css'

const Item = ({ picture, wand, alive, gender, house, nameTitle, actor }) => {
    return (
        <div className='card' >
            <div className="card__picture">
                <img className="card__img" width='334' height='192' src={picture} alt=""/>
            </div>
            <div className="like__container">
                <svg className="like__img empty">\n' +
                '  <use href="#empty-like"></use>\n' +
                "</svg>
            </div>
            <div className="info">
                <h2 className = "info__title">{nameTitle}</h2>
                <p>Actor: {actor}</p>
                <p>Gender: {gender}</p>
                <p>House: {house}</p>
                <p>Wand core: {wand.core}</p>
                <p>Alive: {alive ? "yes" : "no"}</p>
            </div>
        </div>
    );
};

export default Item;