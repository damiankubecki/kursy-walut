import React from 'react'
import styles from './CurrencyItem.module.scss'
import variables from './../../../../../../assets/variables.scss'

const { darkBlackColor } = variables

const CurrencyItem = ({ currency, code, mid, flag, wikipediaLink }) => {
  return (
    <div className={styles.wrapper}>
      {wikipediaLink ? (
        <a className={styles.link} href={wikipediaLink}>
          <p className={styles.name}>{currency}</p>
          <p className={styles.code}>({code})</p>
        </a>
      ) : (
        <>
          <p className={styles.name}>{currency}</p>
          <p className={styles.code}>({code})</p>
        </>
      )}
      <p className={styles.mid}>{mid.toFixed(4)}</p>
      <div
        className={styles.flag}
        style={{
          backgroundImage: `url(${flag || null})`,
          backgroundColor: darkBlackColor,
        }}
      ></div>
    </div>
  )
}

export default CurrencyItem
