import Banner from './components/Banner';
import Getip from './components/Getip';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <section className='content'>
        <Getip type='4'/>
        <Getip type='6'/>
        <Getip type='4'/>
        <Getip type='6'/>
        <Getip type='4'/>
        <Getip type='5'/>
        <Getip type='6'/>
        <Getip type='7'/>
      </section>
    </div>
  );
}

export default App;
