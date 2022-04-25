import React from 'react'
import styles from './HomeView.module.scss'
import CurrenciesList from './CurrenciesList/CurrenciesList'

const HomeView = ({ currenciesData }) => {
  const effectiveDate = currenciesData.date
  const currenciesList = currenciesData.data
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dane walut</h2>
      <p className={styles.effectiveDate}>średnie kursy z dnia: {effectiveDate}</p>
      <CurrenciesList currencies={currenciesList} />
    </div>
  )
}

export default HomeView
