import React, {useState} from "react";

export default function ComponenteCrearCitas({mascotas, setMascotas}){

    const [nombre, setNombre] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [hora, setHora] = useState('')

    function agregarMascota(e){
        e.preventDefault()
        const mascota = {
            nombre,
            fecha,
            hora,
            sintomas,
        }

        //con esto agregamos la mascota al array del app.js
        setMascotas([...mascotas, mascota])
        console.log('ya se ejecuto')

        //aqui se limpian los inputs
        setNombre('')
        setFecha('')
        setHora('')
        setSintomas('')
    }

    return(
        <div className={'m-3 w-1/5 py-8 bg-white rounded-lg shadow-2xl'}>
            <div>
                <h1 className={'text-2xl'}>Crear Cita</h1>
            </div>
            <div >

                <form onSubmit={agregarMascota}>

                    <div>

                        <h2>Nombre</h2>
                        <input
                            className={'h-9 w-1/2 p-2 shadow-inner rounded-md'}
                            type="text"
                            value={nombre}
                            onChange={(e)=>{setNombre(e.target.value)}}
                            placeholder={'Ingrese el nombre de su mascota'}
                        />
                    </div>


                    <div >
                        <h2>Fecha</h2>
                        <input
                            className={'h-9 w-1/2 p-2 shadow-inner rounded-md'}
                            type="date"
                            name={fecha}
                            onChange={(e)=>{setFecha(e.target.value)}}
                        />
                    </div>

                    <div>
                        <h2>Hora de la cita</h2>
                        <input
                            className={'h-9 w-1/2 p-2 shadow-inner rounded-md'}
                            type="time"
                            name={hora}
                            onChange={(e)=>{setHora(e.target.value)}}

                        />
                    </div>


                    <div>
                        <h2>Sintomas</h2>
                        <input
                            className={'h-20 w-1/2 p-2 shadow-inner rounded-md'}
                            type="text"
                            name={'sintomas'}
                            onChange={(e)=>{setSintomas(e.target.value)}}
                            placeholder={'Cuales son sus sintomas?'}
                        />
                    </div>

                    <button className={'w-1/3 h-10 shadow-xl bg-blue-300 text-white rounded-2xl mt-8'} type={"submit"}>Crear Cita</button>
                </form>


            </div>
        </div>
    )
}