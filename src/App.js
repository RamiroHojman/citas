import './App.css';
import Formulario from './components/CrearCita';
import Listado from './components/Listado';
import { useState, useEffect } from 'react';


function App() {
  const [citas, setCitas] = useState([])
  return (
    <div>

      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario citas={citas} setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <div >
              <h2>Administra tus citas</h2>
              <Listado citas={citas} setCitas={setCitas}></Listado>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
