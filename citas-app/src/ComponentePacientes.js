import React from "react";
import PacienteTarjeta from "./PacienteTarjeta";

export default function ComponentePacientes({ mascotas, setMascotas }) {

    const handleDelete = mascotas => {
        if (window.confirm('Desea elimiar este paciente?')) {
            alert('Paciente eliminado')

        }
        setMascotas(setMascotas.filter((mascotas) => !mascotas == mascotas.id));
    }


    return (
        <div className={'m-3 w-auto flex flex-col items-center py-8 h-96 bg-white rounded-lg shadow-xl overflow-auto'}>
            <h2 className={'text-2xl'}>Lista de <span className={'text-sky-400'}>Mascotas</span> </h2>
            {
                mascotas.map((mascotas) => {
                    return <PacienteTarjeta handleDelete={handleDelete}

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