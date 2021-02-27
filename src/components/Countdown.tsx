import styles from '../styles/components/Countdown.module.css'
import {useState, useContext} from 'react'
import { CountdownContext } from '../context/CountdownContext'



export function Countdown(){

  const {
    hasFinished,
    isActive,
    minutes,
    resetCountdown, 
    startCountdown, 
    seconds
  } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

  

  return (
    <div>
      <div className={styles.CountdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    {hasFinished ? ( <button  disabled className={styles.CountdownButton} >
        Ciclo Encerrado
        <img src="icons/check_circle.png" alt=""/>
        <div />
      </button>): (
        <>
          {isActive ? ( 
      <button type="button" className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`} onClick={resetCountdown}>
        Abandonar ciclo
        <img src="icons/Vector.pngimageimage" alt=""/>
      </button>
    ) : ( 
      <button type="button" className={styles.CountdownButton} onClick={startCountdown}>
        Iniciar um ciclo
        <img src="icons/play_arrow.png" alt=""/>
      </button>)
      }
        </>
      )}

   
    
   
    </div>

  )
}