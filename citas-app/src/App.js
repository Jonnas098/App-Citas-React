import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";
import ComponentePacientes from "./ComponentePacientes";
import {useState } from "react";

function App() {

    const [mascotas, setMascotas] = useState([])

    return (
        <div className="App flex flex-col items-center">

            <div className={'bg-blue-400 min-w-[75%] rounded-lg mt-2 shadow-md'}>
                <h1 className={'text-3xl m-2 text-white tracking-wide'}>AmiPets</h1>
            </div>

            <div className={'grid grid-cols-1 gap-4 w-4/5'}>
                <ComponenteCrearCitas
                    mascotas={mascotas}
                    setMascotas={setMascotas}
                />
                <ComponentePacientes
                    mascotas={mascotas}
                    setMascotas={setMascotas}
                />
            </div>

            <div className='h-20 min-w-full flex flex-wrap justify-center place-items-center'>
                <a href='https://github.com/Jonnas098'>Creado por John Navarro R </a> | <a href='https://www.ucreativa.com/' className='text-blue-300'>UCreativa</a> | 2022
            </div>

        </div>
    );
}

export default App;
