import React from 'react'
import styles from './ChooseCurrenciesSection.module.scss'
import CurrenciesSelectList from '../../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Buttons from './Buttons/Buttons'

const ChooseCurrenciesSection = ({
  convertFrom,
  convertTo,
  currenciesCollection,
  changeSelectOptionFn,
  switchConvertedCurrencies,
  resetSelectedCurrencies,
}) => {
  return (
    <div className={styles.wrapper}>
      <CurrenciesSelectList
        listName="convertFrom"
        currenciesCollection={currenciesCollection}
        selectedCurrency={convertFrom}
        calculator={{ anotherSelectedCurrency: convertTo }}
        onChange={changeSelectOptionFn}
      >
        Mam
      </CurrenciesSelectList>
      <Buttons
        switchFn={switchConvertedCurrencies}
        resetFn={resetSelectedCurrencies}
      />
      <CurrenciesSelectList
        listName="convertTo"
        currenciesCollection={currenciesCollection}
        selectedCurrency={convertTo}
        calculator={{ anotherSelectedCurrency: convertFrom }}
        onChange={changeSelectOptionFn}
      >
        Chcę otrzymać
      </CurrenciesSelectList>
    </div>
  )
}

export default ChooseCurrenciesSection
