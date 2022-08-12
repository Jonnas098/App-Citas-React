import React from "react";

export default function ComponenteCrearCitas(){
    return(
        <div>
            <div>
                <h1>Crear Cita</h1>
            </div>
            <div>
                <h2>Nombre</h2>
                <input type="text" placeholder={'Ingrese su nombre y apellidos...'}/>

                <h2>Id</h2>
                <input type="number" placeholder={'Ingrese su id...'}/>

                <h2>Telefono</h2>
                <input type="tel" placeholder={'Ingrese su telefono'}/>

                <h2>E-mail</h2>
                <input type="email" placeholder={'email'}/>
            </div>
        </div>
    )
}