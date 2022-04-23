import React from 'react'
import styles from './CurrencyItem.module.scss'
import variables from './../../../../../../assets/variables.scss'

const { darkBlackColor } = variables

const CurrencyItem = ({ currency, code, mid, flag, wikipediaLink }) => {
  return (
    <a className={styles.link} href={wikipediaLink || null}>
      <div className={styles.wrapper}>
        <p className={styles.code}>{code}</p>
        <p className={styles.mid}>{mid.toFixed(4)}</p>
        <p className={styles.name}>{currency}</p>
        <div
          className={styles.flag}
          style={{
            backgroundImage: `url(${flag || null})`,
            backgroundColor: darkBlackColor,
          }}
        ></div>
      </div>
    </a>
  )
}

export default CurrencyItem
