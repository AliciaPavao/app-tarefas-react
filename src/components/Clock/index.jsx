import { useState, useEffect } from 'react'
import styles from './Clock.module.css'

function Relogio(){
    const [horaAtual, setHoraAtual ] = useState(new Date());

    useEffect(() =>{
        const intervalo = setInterval(() =>{
            setHoraAtual(new Date())
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className={styles.relogioContainer}>
            <h1>Componentes React</h1>
            <span className={styles.hora}>{horaAtual.toLocaleTimeString()}</span>
            <span className={styles.data}>
                {horaAtual.toLocaleDateString('pt-BR', { 
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })}</span>
        </div>
    )
}

export default Relogio