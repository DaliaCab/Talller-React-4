import React, { useState } from 'react';
//import ButtonClick from "./ejercicios"; 
//import FormularioUsuario from "./ejercicios";

//EJERCICIO 1
// function App() {
//   return (
//     <div>
//       <h1>Ejercicio 1</h1>
//       <ButtonClick />
//     </div>
//   );
// }

// export default App;

//EJERCICIO 2
// function App() {
//   return (
//     <div>
//       <h1>Ejercicio 2</h1>
//       <FormularioUsuario />
//     </div>
//   );
// }

// export default App;

//EJERCICIO 3
import './App.css';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [num, setNum] = useState(''); 

  return (
    <div className="appContainer">
      <h1>Ejercicio 3: Lifting State Up</h1>
      <div className="formResultadoContainer">
        <Formulario setNum={setNum} />
        <Resultado num={num} />
      </div>
    </div>
  );
}

export default App;