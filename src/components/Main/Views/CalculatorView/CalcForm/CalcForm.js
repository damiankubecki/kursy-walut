import React from 'react'
import styles from './CalcForm.module.scss'
import ChooseCurrenciesSection from './ChooseCurrenciesSection/ChooseCurrenciesSection'
import SumSection from './SumSection/SumSection'
import Button from '../../../../elements/Button/Button'
import { findCurrencyByCode } from '../../../../../assets/functions/findCurrencyByCode'
import { calculatorViewConfig } from './../../../../../config'

const { initialCurrencies } = calculatorViewConfig

class CalcForm extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesCollection,
    fromCurrency: findCurrencyByCode(
      this.props.currenciesCollection,
      initialCurrencies.from
    ),
    toCurrency: findCurrencyByCode(
      this.props.currenciesCollection,
      initialCurrencies.to
    ),
    sum: null,
  }

  setSum = value => this.setState({ sum: value })

  setCurrency = e => {
    if (!this.state.hasOwnProperty(e.target.name))
      throw new Error(`Unknown '${e.target.name}' state property`)

    const { currenciesCollection } = this.state
    this.setState({
      [e.target.name]: findCurrencyByCode(currenciesCollection, e.target.value),
    })
  }
  resetSelectedCurrencies = e => {
    e.preventDefault()
    this.setState({ fromCurrency: null, toCurrency: null })
  }
  switchSelectedCurrencies = e => {
    e.preventDefault()
    const previousData = { ...this.state }
    this.setState({
      fromCurrency: previousData.toCurrency,
      toCurrency: previousData.fromCurrency,
    })
  }

  calculateResult = () => {
    const { fromCurrency, toCurrency, sum } = this.state
    if (!fromCurrency || !toCurrency || !sum)
      throw new Error('Cannot calculate result')

    const exchangeRate = fromCurrency.mid / toCurrency.mid
    const calcResult = sum * exchangeRate
    this.props.setResult(
      calcResult,
      sum,
      exchangeRate,
      fromCurrency.code,
      toCurrency.code
    )
  }
  showResult = e => {
    e.preventDefault()
    this.calculateResult()
    this.props.setResultVisibility(true)
  }

  render() {
    const { fromCurrency } = this.state
    return (
      <form className={styles.wrapper}>
        <ChooseCurrenciesSection
          setCurrency={this.setCurrency}
          switchSelectedCurrencies={this.switchSelectedCurrencies}
          resetSelectedCurrencies={this.resetSelectedCurrencies}
          {...this.state}
        />
        <SumSection fromCurrency={fromCurrency} setSum={this.setSum} />
        <Button bigger margin="30px 0 0" onClick={this.showResult}>
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
