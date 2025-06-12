import './App.css';
import NeuronPipe from './NeuronPipe';
import Shapes from './Shapes';
import ParticlesBG from './ParticlesBG';

function App() {
  return (
    <div className="App">
      {/* <Shapes /> */}
      {/* <ParticlesBG /> */}
      <NeuronPipe style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}/>
    </div>
  );
}

export default App;
