import logo from './logo.svg';
import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";
import ComponentePacientes from "./ComponentePacientes";
import {useState} from "react";

function App() {

    const [mascotas, setMascotas] = useState([])

    return (
    <div className="App h-max flex items-center justify-center flex-col">
        <h1 className={'text-5xl m-2 text-teal-50'}>AmiPets</h1>
        <ComponenteCrearCitas
            mascotas = {mascotas}
            setMascotas = {setMascotas}
        />
        <ComponentePacientes
            mascotas = {mascotas}
        />
    </div>
  );
}

export default App;
