import React from 'react'
import styles from './HomeView.module.scss'
import ViewTitle from '../../../elements/ViewTitle/ViewTitle'
import CurrenciesList from './CurrenciesList/CurrenciesList'

const HomeView = ({ currenciesData }) => {
  const effectiveDate = currenciesData.date
  const currenciesCollection = currenciesData.data
  return (
    <div className={styles.wrapper}>
      <ViewTitle
        title="Dane walut"
        subtitle={`średnie kursy z dnia ${effectiveDate}`}
      />
      <CurrenciesList currenciesCollection={currenciesCollection} />
    </div>
  )
}

export default HomeView
