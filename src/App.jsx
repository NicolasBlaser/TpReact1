import Formulario from './Formulario';
import Cita from './Cita';
import ListadoCitas from './ListadoCitas';

function App() {
  return (
    <>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <Formulario />
          <ListadoCitas/>
      </div>
    </>
  );
}

export default App;

