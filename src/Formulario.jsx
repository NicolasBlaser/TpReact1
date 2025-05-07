import { useState } from 'react';

function Formulario({ citas, setCitas }) {
  const [mascota, setMascota] = useState('');
  const [duenio, setDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if(mascota == "" || duenio == "" || fecha == "" || hora == "" || sintomas == "")
    {
      alert("Todos los campos son obligatorios")
      return;
    }
 

    const nuevaCita = {
      mascota: mascota,
      dueño: duenio,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    };

    const copia = citas.slice(); 
    copia.push(nuevaCita); 
    setCitas(copia); 

    
    setMascota('');
    setDuenio('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={manejarEnvio}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={duenio}
          onChange={(e) => setDuenio(e.target.value)}
        />
        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;



  