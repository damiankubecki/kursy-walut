import React from 'react'
import styles from './CalculatorView.module.scss'
import CalcForm from './CalcForm/CalcForm'
import CalcResult from './CalcResult/CalcResult'

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
  }

  clearResult = () => this.setState({ result: null })
  calculate = (sum, exchangeRate, fromCurrency, toCurrency) => {
    const calcResult = sum * exchangeRate
    this.setState({
      result: {
        amount: calcResult,
        exchangeRate: exchangeRate,
        from: { sum: sum.toFixed(2), fromCurrency: fromCurrency },
        to: toCurrency,
      },
    })
  }

  render() {
    const { data } = this.props.currenciesData
    const PLN = { code: 'PLN', mid: 1, currency: 'polski złoty' }
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kalkulator</h2>
        <CalcForm
          currenciesData={[PLN, ...data]}
          calculate={this.calculate}
          clearResult={this.clearResult}
        />
        <CalcResult result={this.state.result} />
      </div>
    )
  }
}

export default CalculatorView
