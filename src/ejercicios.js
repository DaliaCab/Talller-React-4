//import React , {useState} from 'react';

//EJERCICIO 1
// function ButtonClick() {
//   return (
//     <div>
//       <button onClick={() => alert('¡Botón clickeado!')}>Clickeame</button>
//     </div>
//   );
// }

// export default ButtonClick;

//EJERCICIO 2
// function FormularioUsuario(){
//     const [nombre, setNombre] = useState('');
//     const [nombreMostrado, setNombreMostrado] = useState('');
    
//     const handleLogin = (e) =>{
//         e.preventDefault();
//         setNombreMostrado(nombre);
//         setNombre()
//     }
//     return(
//         <div>
//             <form onSubmit={handleLogin}>
//                 <input
//                 type="text"
//                 value={nombre}
//                 onChange={(e) => setNombre(e.target.value)}
//                 />
//                 <button type='submit'>Enviar</button>
//             </form>
//             {<h2>El nombre ingresado es:  {nombreMostrado} </h2>}
//         </div>
//     )
// }
// export default FormularioUsuario;

//EJERCICIO 3
//El ejercicio 3 está en la carpeta components