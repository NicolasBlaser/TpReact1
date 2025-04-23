function Cita({ datos }) {
    return (
      <div class="cita">
        <p>Mascota: <span>{datos.mascota}</span></p>
        <p>Dueño: <span>{datos.dueño}</span></p>
        <p>Fecha: <span>{datos.fecha}</span></p>
        <p>Hora: <span>{datos.hora}</span></p>
        <p>Síntomas: <span>{datos.sintomas}</span></p>
        <button class="button elimnar u-full-width">Eliminar ×</button>
      </div>
    );
  }
  
  export default Cita;