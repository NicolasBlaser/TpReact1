import Cita from './Cita';

function ListadoCitas({ citas, eliminarCita }) {
  
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((unaCita, index) => (
        <Cita key={index} datos={unaCita} eliminarCita={eliminarCita} indice={index} />
      ))}
    </div>
  );
}

export default ListadoCitas;
