import './Item.css';
import filled from './filled.svg'
import empty from './empty.svg'

const Item = ({image, wand, alive, gender, house, name, actor, like, dislike, isLiked}) => {

    return (
        <div className='card'>
            <div className="card__picture">
                <img className="card__img" width='334' height='192' src={process.env.PUBLIC_URL + `./images/${image}`} alt=""/>
            </div>
            <div className="like__container">
                <button onClick={() => isLiked ? dislike(name) : like(name)}>
                    <img className='like__img' src={isLiked ? filled : empty} alt="like"/>
                </button>
            </div>
            <div className="info">
                <h2 className="info__title">{name}</h2>
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
