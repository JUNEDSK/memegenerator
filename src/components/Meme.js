import React, { useState } from 'react';
import memeData from '../memeData.js';


/**
* Challenge: Update our state to save the meme-related
* data as an object called 'meme'. It should have the
* following 3 properties:
* topText, bottomText, randomImage.
*
* The 2 text states can default to empty strings for now,
* amd random Image should default to "http://i.imgflip.com/1bij.jpg
*
* Next, create a new state variable called allMeme Images`
* which will default to memesData , which we imported above
*
* Lastly, update the 'getMeme Image function and the markup
* to reflect our newly reformed state object and array in the
* correct way.
*/


// let url;


function Meme(props) {
  const [Meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    }
  );

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
      <div className='memeDisplay'>
        <img src={Meme.randomImage}></img>
      </div>
    </>
  );
}

export default Meme;