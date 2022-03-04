import React from 'react'
import styles from './HomeView.module.scss'
import CurrenciesList from './CurrenciesList/CurrenciesList'

const HomeView = ({ currenciesData }) => {
  const effectiveDate = currenciesData.date
  const currenciesList = currenciesData.data
  console.log(currenciesList)
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Aktualne kursy</h2>
      <p className={styles.effectiveDate}>Dane z dnia: {effectiveDate}</p>
      <CurrenciesList currencies={currenciesList} />
    </div>
  )
}

export default HomeView
