import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
  const citasGuardadas = localStorage.getItem('citas');
  if(citasGuardadas)
  {
    setCitas(JSON.parse(citasGuardadas))
  }
},[])
  

  useEffect(() => {
    if(citas?.length){
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);


  const eliminarCita = (indice) => {
    const nuevasCitas = citas.filter((_, i) => i !== indice);  
    setCitas(nuevasCitas);
    localStorage.setItem(`citas`, JSON.stringify(nuevasCitas))
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <Formulario setCitas={setCitas} citas={citas} />
        <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </>
  );
}

export default App;


