import React, { useState, useEffect } from "react";

export default function ComponenteCrearCitas({ mascotas, setMascotas}) {

    const [nombre, setNombre] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [hora, setHora] = useState('')

    useEffect(()=>{
        console.log('cambio')
        localStorage.setItem('mascotas', JSON.stringify(mascotas))
    }, [mascotas])


    const handleSubmit = (e) => {
        e.preventDefault();

        const mascota = {
            nombre,
            fecha,
            hora,
            sintomas,
        }

        setMascotas([...mascotas, mascota])

        setNombre('')
        setFecha('')
        setHora('')
        setSintomas('')

    }

    
    return (
        <div className={'flex flex-col flex-wrap justify-center m-3 w-auto max-h-70 py-8 bg-white rounded-lg shadow-xl'}>
            <div>
                <h1 className={'text-2xl'}>Crear Cita</h1>
            </div>
            <div >

                <form onSubmit={handleSubmit}>

                    <div>

                        <h2>Nombre</h2>
                        <input
                            className={'h-10 w-1/2 p-2 shadow-inner rounded-md'}
                            type="text"
                            value={nombre}
                            onChange={(e) => { setNombre(e.target.value) }}
                            placeholder={'Ingrese el nombre de su mascota'}
                        />
                    </div>


                    <div >
                        <h2>Fecha</h2>
                        <input
                            className={'h-10 w-1/2 p-2 shadow-inner rounded-md'}
                            type="date"
                            value={fecha}
                            name={fecha}
                            onChange={(e) => { setFecha(e.target.value) }}
                        />
                    </div>

                    <div>
                        <h2>Hora de la cita</h2>
                        <input
                            className={'h-10 w-1/2 p-2 shadow-inner rounded-md'}
                            type="time"
                            name={hora}
                            value={hora}
                            onChange={(e) => { setHora(e.target.value) }}

                        />
                    </div>


                    <div>
                        <h2>Sintomas</h2>
                        <input
                            className={'h-20 w-1/2 p-2 shadow-inner rounded-md'}
                            type="text"
                            name={'sintomas'}
                            value={sintomas}
                            onChange={(e) => { setSintomas(e.target.value) }}
                            placeholder={'Cuales son sus sintomas?'}
                        />
                    </div>

                    <button className={'w-1/2 sm:w-1/4 h-10 shadow-xl bg-blue-300 hover:bg-blue-500 text-white rounded-2xl mt-8'} type={"submit"}>Crear Cita</button>
                </form>


            </div>
        </div>
    )
}