import logo from './logo.svg';
import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";
import ComponentePacientes from "./ComponentePacientes";

function App() {
  return (
    <div className="App">
        <h1 className={'text-5xl m-2'}>Mi Clinica React</h1>
        <ComponenteCrearCitas/>
        <ComponentePacientes/>
    </div>
  );
}

export default App;
