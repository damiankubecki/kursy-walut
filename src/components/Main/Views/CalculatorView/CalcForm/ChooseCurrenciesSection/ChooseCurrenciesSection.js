import React from 'react'
import styles from './ChooseCurrenciesSection.module.scss'
import CurrenciesSelectList from '../../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Buttons from './Buttons/Buttons'

const ChooseCurrenciesSection = ({
  fromCurrency,
  toCurrency,
  currenciesCollection,
  setCurrency,
  switchSelectedCurrencies,
  clearSelectedCurrencies,
}) => {
  return (
    <div className={styles.wrapper}>
      <CurrenciesSelectList
        listName="fromCurrency"
        currenciesCollection={currenciesCollection}
        selectedCurrencyCode={fromCurrency?.code}
        anotherSelectedCurrency={toCurrency}
        onChange={setCurrency}
      >
        Mam
      </CurrenciesSelectList>
      <Buttons
        switchFn={switchSelectedCurrencies}
        resetFn={clearSelectedCurrencies}
      />
      <CurrenciesSelectList
        listName="toCurrency"
        currenciesCollection={currenciesCollection}
        selectedCurrencyCode={toCurrency?.code}
        anotherSelectedCurrency={fromCurrency}
        onChange={setCurrency}
      >
        Chcę otrzymać
      </CurrenciesSelectList>
    </div>
  )
}

export default ChooseCurrenciesSection
