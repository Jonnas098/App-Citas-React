import React, { useState } from "react";
import PacienteTarjeta from "./PacienteTarjeta";

export default function ComponentePacientes({mascotas}) {


    return (
        <div className={'m-3 w-auto flex flex-col items-center py-8 h-auto bg-white rounded-lg shadow-xl'}>
            <h2 className={'text-2xl'}>Lista de <span className={'text-sky-400'}>Mascotas</span> </h2>
            {
                mascotas.map((mascotas) => {
                    return <PacienteTarjeta
                    
                        key={mascotas.nombre}
                    
                        //esto son los props que iran en el componente paciente 
                        nombre={mascotas.nombre}
                        fecha={mascotas.fecha}
                        hora={mascotas.hora}
                        sintomas={mascotas.sintomas}
                    />
                })
            }
        </div>
    )
}