import React, {useState} from "react";

export default function PacienteTarjeta({nombre, fecha, hora, sintomas}){
    return(
        <div className={'shadow-inner bg-teal-50 w-1/2 m-2'}>
            <p>
                Nombre: {nombre}
            </p>
            <p>
                Fecha: {fecha}
            </p>
            <p>
                Hora: {hora}
            </p>
            <p>
                Sintomas: {sintomas}
            </p>

        </div>
    )
}