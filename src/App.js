import logo from './logo.svg';
import './App.css';
const citas = [
  { Mascota: 'Blacky', Dueño: 'Jere', Fecha: '2023-05-08', Hora: '16:15', Sintomas: 'No está comiendo' },
  { Mascota: 'Nina', Dueño: 'Martin', Fecha: '2021-08-05', Hora: '08:20', Sintomas: 'Le duele la pierna' },
  { Mascota: 'Sifon', Dueño: 'Flecha', Fecha: '2023-06-10', Hora: '09:24', Sintomas: 'Duerme mucho' }
];
const ListaCitas = citas.map(cita =>
  <div className="cita" key={cita.Mascota}>
    <p>Mascota: <span>{cita.Mascota}</span></p>
    <p>Dueño: <span>{cita.Dueño}</span></p>
    <p>Fecha: <span>{cita.Fecha}</span></p>
    <p>Hora: <span>{cita.Hora}</span></p>
    <p>Sintomas: <span>{cita.Sintomas}</span></p>
    <button className="button elimnar u-full-width">Eliminar ×</button>    
  </div>

);
function CrearCita() {
  return (

      <div>

      <h2>Crear mi Cita</h2>
    
      <form>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
        <label>Fecha</label>
        <input type="date" name="fecha" class="u-full-width" value=""></input>
        <label>hora</label>
        <input type="time" name="hora" class="u-full-width" value=""></input>
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </form>
      
      </div>

  );
}
function AdministrarCita() {
  return (
    <div >
      <h2>Administra tus citas</h2>
      {ListaCitas}
    </div>
    )
}
function App() {
  return (
  <div>

  <h1>ADMINISTRADOR DE PACIENTES</h1>
  <div class="container">
    <div class="row">
      <div class="one-half column">
      <CrearCita/>
      </div>
      <div class="one-half column">
      <AdministrarCita />
      </div>
    </div>
  </div>
     
  </div>
  );
}

export default App;
