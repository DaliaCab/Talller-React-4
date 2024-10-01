import React from "react";
import styles from '../styles/Resultado.module.css';

function Resultado({num}){
    return(
        <div className={styles.formularioContainer}>
            <h2>Resultado</h2>
            <p>El número ingresado es: <br/> {num}</p>
        </div>
    )
}
export default Resultado