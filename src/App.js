import './App.css';
import React from 'react';
// import Header from './components/Header';
// import Meme from './components/Meme';

// import Meme from './components/Meme';
import { useState } from 'react';
import PropsHeader from './components/PropHeader';
import PropsBody from './components/PropBody';
// import DemoClick from './components/DemoClick';
// import DemoItem from './components/DemoItem';


function App() {
  const [isUser, setIsUser] = useState("bob");

  return (
    <>
      <PropsHeader isUser={isUser}></PropsHeader>
      <PropsBody isUser={isUser}></PropsBody>
      {/* <Header></Header>
      <div className='container'>
        <Meme></Meme>
      </div> */}
      {/* <DemoItem></DemoItem> */}
    </>
  );
}

export default App;
