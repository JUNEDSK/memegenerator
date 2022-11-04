import React from 'react';

function Meme(props) {
    return (
        <div>
            <main>
                <form className="form">

                    <div className='input--wrap'>
                        <input
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                        />
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="form--input"
                        />
                    </div>
                    <button className="form--button">Get a new meme image  🖼</button>
                </form>
            </main>
        </div >
    );
}

export default Meme;