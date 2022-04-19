import React from 'react'
import styles from './SearchForm.module.scss'
import CurrenciesSelectList from '../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'

const SearchForm = ({
  currenciesData,
  ratesNumber,
  currency,
  handleCurrencyChange,
  handleRatesNumberChange,
  submitFn,
}) => {
  return (
    <form className={styles.wrapper} onSubmit={e => submitFn(e)}>
      <div className={styles.selectContainer}>
        <CurrenciesSelectList
          currenciesCollection={currenciesData}
          selectedCurrency={currency}
          onChange={e => handleCurrencyChange(e.target.value)}
        >
          Waluta:
        </CurrenciesSelectList>
      </div>
      <div className={styles.inputContainer}>
        <Input
          type={'number'}
          maxLength={2}
          defaultValue={ratesNumber}
          onChange={e => handleRatesNumberChange(e.target.value * 1)}
          onClear={() => handleRatesNumberChange(null)}
        >
          Ilość ostatnich notowań:
        </Input>
      </div>
      <Button bigger>Szukaj</Button>
    </form>
  )
}

export default SearchForm
