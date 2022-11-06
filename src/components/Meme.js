import React from 'react';
import memeData from '../memeData.js';

let url;

function getMemeImg(e){
    e.preventDefault();
//  console.log('test>>',memeData);
 const memeArray = memeData.data.memes;
 const randomNumber = Math.floor(Math.random() * memeArray.length);
//  console.log(randomNumber);
  url = memeArray[randomNumber].url;
 console.log(url);
}

function Meme(props) {
    return (
      <div>
        <main>
          <p>{url}</p>
          <form className="form">
            <div className="input--wrap">
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
            <button className="form--button" onClick={getMemeImg}>
              Get a new meme image 🖼
            </button>
          </form>
        </main>
      </div>
    );
}

export default Meme;