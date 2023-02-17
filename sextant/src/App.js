import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <section className='content'>
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
      </section>
    </div>
  );
}

export default App;
