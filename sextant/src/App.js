import Card from './components/Card';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='content'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
