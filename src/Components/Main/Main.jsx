import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="grid">

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