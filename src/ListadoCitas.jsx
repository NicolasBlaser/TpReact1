import Cita from './Cita';
const citaEjemplo = {
  mascota: 'Firulais',
  dueño: 'Nico',
  fecha: '2025-04-16',
  hora: '15:30',
  sintomas: 'Dolor de panza'
};
const citaEjemplo2 = {
  mascota: 'Tirabuzon',
  dueño: 'Bruno',
  fecha: '2025-04-16',
  hora: '15:30',
  sintomas: 'exceso de facha'
};
const citaEjemplo3 = {
  mascota: 'moño',
  dueño: 'Alfio',
  fecha: '2025-04-16',
  hora: '15:34',
  sintomas: 'cansancio extremo'
};


function ListadoCitas({ citas }) {
  return (
    <div class="one-half column">
      <h2>Administra tus citas</h2>
      <Cita datos={citaEjemplo} />
      <Cita datos={citaEjemplo2} />
      <Cita datos={citaEjemplo3} />
    </div>
  );
}

export default ListadoCitas;
