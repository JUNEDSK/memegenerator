import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
// import DemoItem from './components/DemoItem';


function App() {
  return (
    <>
      <Header></Header>
      <div className='container'>
        <Meme></Meme>
      </div>
      {/* <DemoItem></DemoItem> */}
    </>
  );
}

export default App;
