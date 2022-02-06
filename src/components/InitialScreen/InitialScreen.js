import React from 'react'
import styles from './InitialScreen.module.scss'
import Loader from '../elements/Loader/Loader'
import variables from './../../assets/variables.scss'

const { goldColor } = variables

const InitialScreen = ({ active }) => (
  <>
    {active && (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kursy walut online</h2>
        <p className={styles.subtitle}>created &amp; designed by Damian Kubecki</p>
        <Loader itemsColor={goldColor} fontSize={'1.5rem'} animationSize={25}></Loader>
      </div>
    )}
  </>
)

export default InitialScreen
