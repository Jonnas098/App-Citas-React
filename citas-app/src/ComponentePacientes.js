import React from "react";
import PacienteTarjeta from "./PacienteTarjeta";

export default function ComponentePacientes({ mascotas, deleteMascota }) {


    const borrarMascota = ()=>{
        if (window.confirm('Seguro que desea eliminar esta cita?')){
            deleteMascota()
            alert('Cita eliminada')
        }

    }

    return (
        <div className={'m-3 w-auto flex flex-col items-center py-8 h-96 bg-white rounded-lg shadow-xl overflow-auto'}>
            <h2 className={'text-2xl'}>Lista de <span className={'text-sky-400'}>Mascotas</span> </h2>
            {
                mascotas.map((mascotas, id) => {
                    return <PacienteTarjeta id={id} borrarMascota={borrarMascota}

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