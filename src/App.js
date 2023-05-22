import logo from './logo.svg';
import './App.css';
import Formulario from './components/CrearCita';
import Listado from './components/Listado';


function App() {
  const [citas, setCitas] = useState([])

  return (
    <div>

      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario setCitas={setCitas} />
          </div>
          <div class="one-half column">
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
