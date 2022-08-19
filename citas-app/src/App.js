import logo from './logo.svg';
import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";
import ComponentePacientes from "./ComponentePacientes";
import {useState} from "react";

function App() {

    const [mascotas, setMascotas] = useState([])

    return (
    <div className="App flex flex-col items-center">

        <div className={'bg-blue-400 w-1/5 rounded-lg mt-2'}>
            <h1 className={'text-3xl m-2 text-white tracking-wide'}>AmiPets</h1>
        </div>

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
