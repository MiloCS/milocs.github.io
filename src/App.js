import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='body-wrapper'>
        <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
