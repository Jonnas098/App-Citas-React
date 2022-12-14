import './App.css';
import ComponenteCrearCitas from "./ComponenteCrearCitas";
import ComponentePacientes from "./ComponentePacientes";
import {useEffect, useState} from "react";

function App() {

    const [mascotas, setMascotas] = useState([])

    //Esta seccion del codigo me guarda en el local storage las citas creadas

    useEffect(()=>{
        let data = localStorage.getItem('mascotas');
        if (data){
            setMascotas(JSON.parse(data));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('mascotas', JSON.stringify(mascotas))
    }, [mascotas])

    //Funcion para eliminar la mascota

    const deleteMascota = () => {
        setMascotas(mascotas.filter(mascotas => mascotas.id))
    }

    return (
        <div className="App flex flex-col items-center">

            <div className={'bg-blue-400 w-4/5 lg:w-1/2 lg:w-3/4 h-16 rounded-lg mt-2 shadow-md'}>
                <h1 className={'text-3xl m-2 text-white tracking-wide text-center'}>AmiPets</h1>
            </div>

            <div className={'grid grid-cols-1 gap-4 w-4/5 lg:grid-cols-2 lg:gap-0 lg:w-3/4 lg:w-1/2'}>
                <ComponenteCrearCitas
                    mascotas={mascotas}
                    setMascotas={setMascotas}
                />
                <ComponentePacientes
                    mascotas={mascotas}
                    setMascotas={setMascotas}
                    deleteMascota={deleteMascota}
                />
            </div>

            <div className='h-20 min-w-full flex flex-wrap justify-center place-items-center'>
                <a href='https://github.com/Jonnas098'>Creado por John Navarro R </a> | <a href='https://www.ucreativa.com/' className='text-blue-300'>UCreativa</a> | 2022
            </div>

        </div>
    );
}

export default App;
