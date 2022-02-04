import React from 'react'
import Animation from 'react-spinners/PulseLoader'
import styles from './Loader.module.scss'
import variables from './../../assets/variables.scss'

const { goldColor } = variables

const Loader = ({ active }) => (
  <>
    {active && (
      <div className={styles.wrapper}>
        <h2 className={styles.title}> Trwa pobieranie danych </h2>
        <Animation loading={true} color={goldColor} css={'padding: 10px;'} size={15} />
      </div>
    )}
  </>
)

export default Loader
