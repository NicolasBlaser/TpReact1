import Cita from './Cita';

function ListadoCitas({ citas }) {
  return (
    <div className="listado">
      <h2>ADMINISTRA TUS CITAS</h2>
      {citas.map(cita => (
        <Cita key={cita.id} datos={cita} />
      ))}
    </div>
  );
}

export default ListadoCitas;
