import React from 'react'
import styles from './ChooseCurrenciesSection.module.scss'
import OptionsList from './OptionsList/OptionsList'
import Buttons from './Buttons/Buttons'

const ChooseCurrenciesSection = ({
  convertFrom,
  convertTo,
  currencies,
  changeSelectOptionFn,
  switchConvertedCurrencies,
  resetSelectedCurrencies,
}) => {
  return (
    <div className={styles.wrapper}>
      <OptionsList
        listName="convertFrom"
        currencies={currencies}
        selectedCurrency={convertFrom}
        anotherSelectedCurrency={convertTo}
        selectFn={changeSelectOptionFn}
      >
        Mam
      </OptionsList>
      <Buttons
        switchFn={switchConvertedCurrencies}
        resetFn={resetSelectedCurrencies}
      />
      <OptionsList
        listName="convertTo"
        currencies={currencies}
        selectedCurrency={convertTo}
        anotherSelectedCurrency={convertFrom}
        selectFn={changeSelectOptionFn}
      >
        Chcę otrzymać
      </OptionsList>
    </div>
  )
}

export default ChooseCurrenciesSection
