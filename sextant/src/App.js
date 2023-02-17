import Banner from './components/Banner';
import Getip from './components/Getip';
import Latency from './components/Latency';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <section className='content'>
        <Getip type='4'/>
        <Getip type='6'/>
        <Latency />

      </section>
    </div>
  );
}

export default App;
