import React from 'react';
import './Search.css'

const Search = ({ setSearchItem, setSelect }) => {
    return (
        <>
            <div className='container'>
                <form action="#" className="header__form form">
                    <div className="form__name">
                        <span className="form__text">Name</span>
                        <input
                            onChange={(event) => setSearchItem(event.target.value)}
                            className="form__input"
                            type="text"
                            required
                            placeholder="Hermione"
                            id="input"
                        />
                    </div>
                    <div className="form__school">
                        <span className="form__text">School</span>
                        <select onChange={(event) => setSelect(event.target.value)} className="form__select" name="school" required id="school">
                            <option value="">Choose one</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Slytherin">Slytherin</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                        </select>
                    </div>
                </form>
            </div>
            <hr/>
        </>
    );
};

export default Search;