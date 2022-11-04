import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <>
      <Header></Header>
      <div className='container'>
        <Meme></Meme>
      </div>
    </>
  );
}

export default App;
