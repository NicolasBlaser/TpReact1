import { useState } from 'react';

function Formulario() {
  const [formulario, setFormulario] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita enviada:', formulario);
    // Aquí podrías pasar los datos al padre
    // y luego reiniciar el formulario si querés.
  };

  return (
    <>
      <h2 className="titulo-formulario">Formulario</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={formulario.mascota}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueño"
          value={formulario.dueño}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={formulario.hora}
          onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          value={formulario.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit">AGREGAR CITA</button>
      </form>
    </>
  );
}

export default Formulario;

  