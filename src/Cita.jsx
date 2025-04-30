function Cita({ datos, eliminarCita, indice }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{datos.mascota}</span></p>
      <p>Dueño: <span>{datos.dueño}</span></p>
      <p>Fecha: <span>{datos.fecha}</span></p>
      <p>Hora: <span>{datos.hora}</span></p>
      <p>Síntomas: <span>{datos.sintomas}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(indice)}
      >
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;
