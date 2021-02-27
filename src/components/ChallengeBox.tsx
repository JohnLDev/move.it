import React, { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox: React.FC = () => {
  const {activeChallenge, resetChallenge, CompleteChallenge} = useContext(ChallengesContext)
  const  {resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded(){
    CompleteChallenge()
    resetCountdown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
  }

  return (
  <div className={styles.ChallengeBoxContainer}>
    {activeChallenge ? (<div className={styles.ChallengeActive}>
      <header>Ganhe {activeChallenge.amount} xp</header>
      <main>
        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
        <strong>Novo desafio</strong>
        <p>{activeChallenge.description}</p>
      </main>
      <footer>
        <button type="button" onClick={handleChallengeFailed}  className={styles.challengeFailedButton}>
          Falhei
          </button>
        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded} >
          Completei
          </button>
      </footer>
    </div>) : (
    <div className={styles.challengeNotActive}>
      <strong>
      Inicie um ciclo para receber desafios a serem completados
      </strong>
      <p>
        <img src="icons/level-up.svg" alt="level-up"/>
        Avance de level completando desafios
      </p>
    </div>
    )}
  </div>)
}

export default ChallengeBox;