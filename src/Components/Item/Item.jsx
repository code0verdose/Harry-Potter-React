import React, {useState} from 'react';
import './Item.css';
import like from './like.svg'
import empty from './empty.svg'

const Item = ({ picture, wand, alive, gender, house, nameTitle, actor }) => {

    const [isLike, setLike] = useState(false);

    return (
        <div className='card' >
            <div className="card__picture">
                <img className="card__img" width='334' height='192' src={picture} alt=""/>
            </div>
            <div className="like__container">
                <button onClick={() => {setLike(!isLike)}}>
                    <img className='like__img' src={isLike ? like : empty} alt="like"/>
                </button>
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
