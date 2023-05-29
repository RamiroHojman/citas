import React from "react";

const Listado = (props) => {
    
    <div className="container">
        <div className="cita" key={props.citas.Mascota}>
            <p>Mascota: <span>{props.citas.Mascota}</span></p>
            <p>Dueño: <span>{props.citas.Dueño}</span></p>
            <p>Fecha: <span>{props.citas.Fecha}</span></p>
            <p>Hora: <span>{props.citas.Hora}</span></p>
            <p>Sintomas: <span>{props.citas.Sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
        <br></br>
    </div>
};
export default Listado;