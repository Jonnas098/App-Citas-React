import React from "react";

export default function PacienteTarjeta({ nombre, fecha, hora, sintomas, borrarMascota}) {


    return (
        <div className={'bg-white w-4/5 my-4 p-2 shadow-md rounded-lg '}>
            <div className={'text-left'}>
                <p className={'mb-2'}>
                    <span className='text-xl font-light'>Nombre:</span> {nombre}
                </p>
                <p className={'mb-2'}>
                    <span className='text-xl font-light'>Fecha:</span> {fecha}
                </p>
                <p className={'mb-2'}>
                    <span className='text-xl font-light'>Hora:</span> {hora}
                </p>
                <p>
                    <span className='text-xl font-light'>Sintomas:</span> {sintomas}
                </p>

            </div>

            <div className={'flex justify-end '}>
                <button
                    onClick={borrarMascota}
                    className={'w-1/2 sm:w-1/4 h-10 shadow-xl bg-blue-300 hover:bg-blue-500 text-white rounded-2xl mt-8'}>Borrar</button>

            </div>
        </div>

    )
}