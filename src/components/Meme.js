import React, { useState } from 'react';
import memeData from '../memeData.js';


let url;

function Meme(props) {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImg(e) {
    e.preventDefault();
    //  console.log('test>>',memeData);
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImage(url = memeArray[randomNumber].url)
    //  console.log(randomNumber);
    // url = memeArray[randomNumber].url;
    // console.log(url);
  }
  return (
    <>
      <div>
        <main>
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
      <div>
        <img src={memeImage}></img>
      </div>
    </>
  );
}

export default Meme;