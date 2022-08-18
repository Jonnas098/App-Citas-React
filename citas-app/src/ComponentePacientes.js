import React, {useState} from "react";
import PacienteTarjeta from "./PacienteTarjeta";

export default function ComponentePacientes({mascotas}){


    return(
        <div className={'m-3 w-1/2 py-8 h-auto bg-lime-50 rounded-lg shadow-2xl'}>
            <h2 className={'text-2xl'}>Lista de Mascotas</h2>
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