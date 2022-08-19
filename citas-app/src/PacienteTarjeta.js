import React, {useState} from "react";

export default function PacienteTarjeta({nombre, fecha, hora, sintomas}){


    return(
        <div className={'bg-white w-4/5 m-2 p-2 shadow-md rounded-lg text-left'}>
            <p className={'mb-2'}>
                Nombre: {nombre}
            </p>
            <p className={'mb-2'}>
                Fecha: {fecha}
            </p>
            <p className={'mb-2'}>
                Hora: {hora}
            </p>
            <p>
                Sintomas: {sintomas}
            </p>

            <button
                className={'w-1/3 h-10 shadow-xl bg-blue-300 text-white rounded-2xl my-2'}>Borrar</button>

        </div>
    )
}