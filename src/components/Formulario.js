import React from "react";
import styles from '../styles/Formulario.module.css';

function Formulario({setNum}){
    const handleChange = (e)=>{ //e es abreviatura para event
        setNum(e.target.value)
    };

    return(
        <div className={styles.formularioContainer}>
            <h2>Formulario</h2>
            <p>Escriba un número</p>
            <input
            type="text"
            onChange={handleChange}/>
        </div>
    )
}
export default Formulario