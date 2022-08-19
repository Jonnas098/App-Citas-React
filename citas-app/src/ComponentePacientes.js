import React, {useState} from "react";
import PacienteTarjeta from "./PacienteTarjeta";

export default function ComponentePacientes({mascotas}){


    return(
        <div className={'flex items-center justify-center flex-col m-3 w-1/5 py-8 h-auto bg-white rounded-lg shadow-2xl'}>
            <h2 className={'text-lg text-left mr-20'}>Lista de Mascotas</h2>
            {
                mascotas.map((mascota)=>{
                    return <PacienteTarjeta
                    nombre={mascota.nombre}
                    fecha={mascota.fecha}
                    hora ={mascota.hora}
                    sintomas={mascota.sintomas}
                    />
                })
            }
        </div>
    )
}