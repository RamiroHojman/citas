import React from "react";

const Formulario = (props) => {
  const cita = {Mascota : document.getElementsByName("Mascota").value, Dueño : document.getElementsByName("Dueño").value, Fecha : document.getElementsByName("Fecha").value,Hora : document.getElementsByName("Hora").value,Sintomas : document.getElementsByName("Sintomas").value}
  const nuevasCitas = props.citas
  nuevasCitas.push(cita) - // citas + cita
  props.setCitas(nuevasCitas)

  return (

    <div>

      <h2>Crear mi Cita</h2>

      <div >
        <label>Nombre Mascota</label>
        <input type="text" name="Mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
        <label>Nombre Dueño</label>
        <input type="text" name="Dueño" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
        <label>Fecha</label>
        <input type="date" name="Fecha" class="u-full-width" value=""></input>
        <label>hora</label>
        <input type="time" name="Hora" class="u-full-width" value=""></input>
        <label>Sintomas</label>
        <textarea name="Sintomas" class="u-full-width"></textarea>
        <button type="button" class="u-full-width button-primary" onClick={cita}>Agregar Cita</button>
      </div>

    </div>

  );
}
export default Formulario;