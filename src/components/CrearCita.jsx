import React from "react";

const Formulario = (props) => {

  function crear() {
    const cita = { Mascota: document.getElementsByName("Mascota").value, Dueño: document.getElementsByName("Dueño").value, Fecha: document.getElementsByName("Fecha").value, Hora: document.getElementsByName("Hora").value, Sintomas: document.getElementsByName("Sintomas").value }
    const nuevasCitas = props.citas
    nuevasCitas.push(cita) // citas + cita
    props.setCitas(nuevasCitas)
  }
  return (

    <div>

      <h2>Crear mi Cita</h2>

      <div >
        <label>Nombre Mascota</label>
        <input type="text" name="Mascota" className="u-full-width" placeholder="Nombre Mascota" ></input>
        <label>Nombre Dueño</label>
        <input type="text" name="Dueño" className="u-full-width" placeholder="Nombre dueño de la mascota" ></input>
        <label>Fecha</label>
        <input type="date" name="Fecha" className="u-full-width" ></input>
        <label>hora</label>
        <input type="time" name="Hora" className="u-full-width" ></input>
        <label>Sintomas</label>
        <textarea name="Sintomas" className="u-full-width"></textarea>
        <button type="button" className="u-full-width button-primary" onClick={crear}>Agregar Cita</button>
      </div>

    </div>

  );
}
export default Formulario;