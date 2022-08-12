import logo from './logo.svg';
import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";

function App() {
  return (
    <div className="App">
        <h1 className={'text-2xl text-violet-900 font-medium'}>Mi Clinica React</h1>
        <ComponenteCrearCitas/>
    </div>
  );
}

export default App;
