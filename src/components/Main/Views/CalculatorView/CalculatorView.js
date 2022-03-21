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
        amount: calcResult.toFixed(2).toString().replace('.', ','),
        exchangeRate: exchangeRate.toFixed(4).toString().replace('.', ','),
        from: {
          sum: sum.toFixed(2).toString().replace('.', ','),
          fromCurrency: fromCurrency,
        },
        to: toCurrency,
      },
    })
  }

  render() {
    const { data, date } = this.props.currenciesData

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kalkulator</h2>
        <CalcForm
          currenciesData={[PLN, ...data]}
          setResult={this.setResult}
          setResultVisibility={this.setResultVisibility}
        />
        <CalcResult
          showResult={this.state.showResult}
          result={this.state.result}
          rateDate={date}
        />
      </div>
    )
  }
}

export default CalculatorView
