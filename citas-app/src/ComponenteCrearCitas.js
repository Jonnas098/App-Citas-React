import React, {useState} from "react";

export default function ComponenteCrearCitas(){

    const [datos, setDatos] = useState({
        nombre: '',
        id: '',

        }
    )

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.id)
    }

    return(
        <div>
            <div>
                <h1>Crear Cita</h1>
            </div>
            <div className={'grid grid-cols-2 auto-cols-min border-solid border-2 border-black p-4'}>

                <form onSubmit={enviarDatos}>

                    <div className={'border-solid border-2'}>
                        <h2>Nombre</h2>
                        <input type="text"
                               name={'nombre'}
                               placeholder={'Ingrese su nombre y apellidos...'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>Id</h2>
                        <input type="number"
                               name={'id'}
                               placeholder={'Ingrese su id...'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>Telefono</h2>
                        <input type="tel"
                               name={'telefono'}
                               placeholder={'Ingrese su telefono'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>E-mail</h2>
                        <input type="email"
                               name={'correo'}
                               placeholder={'email'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>Fecha</h2>
                        <input type="date"
                               name={'fecha'}
                               placeholder={'Fecha de la cita'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>Hora</h2>
                        <input type="time"
                               name={'hora'}
                               placeholder={'Ingrese la hora'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className={'border-solid border-2'}>
                        <h2>Sintomas</h2>
                        <input type="text"
                               name={'sintomas'}
                               placeholder={'Cuales son sus sintomas?'}
                               onChange={handleInputChange}
                        />
                    </div>

                    <button type={"submit"}>Crear Cita</button>
                </form>
                

            </div>
        </div>
    )
}