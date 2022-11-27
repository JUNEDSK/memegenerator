import React, { useState } from 'react';
import memeData from '../memeData.js';


// let url;


function Meme(props) {
  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    }
  );

  console.log(meme)



  const [allMemeImage, setAllMemeImage] = useState(memeData);


  function getMemeImg(e) {
    e.preventDefault();
    //  console.log('test>>',memeData);
    const memeArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    const{name, value} = event.target;
      setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
      }))
  }

  return (
    <>
      <div className='mainMemeWrap'>
        <main>
          <form className="form">
            <div className="input--wrap">
              <input
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
                
              />

              <input
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
              />
            </div>
            <button className="form--button" onClick={getMemeImg}>
              Get a new meme image 🖼
            </button>
          </form>
        </main>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}

export default Meme;