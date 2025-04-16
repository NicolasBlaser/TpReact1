import Formulario from './Formulario';
import Cita from './Cita';

function App() {
  const citaEjemplo = {
    mascota: 'Firulais',
    dueño: 'Juan',
    fecha: '2025-04-16',
    hora: '15:30',
    sintomas: 'Dolor de panza'
  };

  return (
    <div className="contenedor-principal">
      <div className="seccion-formulario">
        <Formulario />
      </div>
      <div className="seccion-citas">
        <h2>Listado de Citas</h2>
        <Cita datos={citaEjemplo} />
      </div>
    </div>
  );
}

export default App;

