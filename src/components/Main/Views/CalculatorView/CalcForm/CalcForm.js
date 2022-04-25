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
  clearSum = () => this.setState({ sum: null })

  setCurrency = e => {
    if (!this.state.hasOwnProperty(e.target.name))
      throw new Error(`Unknown '${e.target.name}' state property`)

    const { currenciesCollection } = this.state
    this.setState({
      [e.target.name]: findCurrencyByCode(currenciesCollection, e.target.value),
    })
  }
  clearSelectedCurrencies = e => {
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

    const { setResult } = this.props
    const exchangeRate = fromCurrency.mid / toCurrency.mid
    const calcResult = sum * exchangeRate
    setResult(calcResult, sum, exchangeRate, fromCurrency.code, toCurrency.code)
  }
  showResult = e => {
    e.preventDefault()
    this.calculateResult()
    this.props.setResultVisibility(true)
  }

  render() {
    const { fromCurrency } = this.state
    return (
      <form className={styles.wrapper} onSubmit={this.showResult}>
        <ChooseCurrenciesSection
          setCurrency={this.setCurrency}
          switchSelectedCurrencies={this.switchSelectedCurrencies}
          clearSelectedCurrencies={this.clearSelectedCurrencies}
          {...this.state}
        />
        <SumSection
          fromCurrencyCode={fromCurrency?.code}
          setSum={this.setSum}
          clearSum={this.clearSum}
        />
        <Button bigger margin="30px 0 0">
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
