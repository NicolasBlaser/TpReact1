function Cita({ datos }) {
    return (
      <div className="cita">
        <p><strong>Mascota:</strong> {datos.mascota}</p>
        <p><strong>Dueño:</strong> {datos.dueno}</p>
        <p><strong>Fecha:</strong> {datos.fecha}</p>
        <p><strong>Hora:</strong> {datos.hora}</p>
        <p><strong>Síntomas:</strong> {datos.sintomas}</p>
        <button>ELIMINAR</button>
      </div>
    );
  }
  
  export default Cita;