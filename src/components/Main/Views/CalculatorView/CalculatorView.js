import React from 'react'
import styles from './CalculatorView.module.scss'
import CalcForm from './CalcForm/CalcForm'
import CalcResult from './CalcResult/CalcResult'
import { PLN } from './../../../../config'

class CalculatorView extends React.Component {
  state = {
    result: {
      amount: 0,
      exchangeRate: 0,
      from: {
        sum: 0,
        fromCurrency: '',
      },
      to: '',
    },
    showResult: false,
  }

  setResultVisibility = value => this.setState({ showResult: value })
  setResult = (calcResult, sum, exchangeRate, fromCurrency, toCurrency) => {
    this.setState({
      result: {
        amount: this.getConvertedValue(calcResult),
        exchangeRate: exchangeRate.toFixed(4).toString().replace('.', ','),
        from: {
          sum: this.getConvertedValue(sum),
          fromCurrency: fromCurrency,
        },
        to: toCurrency,
      },
    })
  }
  getConvertedValue = value => {
    value = value.toFixed(2).toString().replace('.', ',')
    let valueLength = value.length - 3
    let loops = 1
    while (valueLength / 3 >= 1) {
      value = value.split('').reverse()
      value.splice(4 * loops++ + 2, 0, ' ').reverse()
      value = value.reverse().join('')
      valueLength -= 3
    }
    return value
  }

  render() {
    const { data, date } = this.props.currenciesData
    const { result, showResult } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kalkulator</h2>
        <CalcForm
          currenciesCollection={[PLN, ...data]}
          setResult={this.setResult}
          setResultVisibility={this.setResultVisibility}
        />
        <CalcResult showResult={showResult} result={result} rateDate={date} />
      </div>
    )
  }
}

export default CalculatorView
