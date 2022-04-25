import React from 'react'
import styles from './CalculatorView.module.scss'
import {
  convertSum,
  convertResult,
  convertExchangeRate,
} from '../../../../assets/functions/convertedValues'
import CalcForm from './CalcForm/CalcForm'
import CalcResult from './CalcResult/CalcResult'
import { PLN } from './../../../../config'

class CalculatorView extends React.Component {
  state = {
    form: {
      fromCurrency: null,
      toCurrency: null,
      sum: null,
    },
    result: {
      exchangeRate: null,
      resultValue: null,
    },
  }

  setFormInfos = ({ fromCurrency, toCurrency, sum }) => {
    if (!fromCurrency || !toCurrency || !sum) throw new Error('Uncomplete data')

    this.setState({
      form: {
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
        sum: convertSum(sum),
      },
    })
  }
  setResult = (exchangeRate, resultValue) => {
    if (!exchangeRate || !resultValue) throw new Error('Uncomplete data')

    this.setState({
      result: {
        exchangeRate: convertExchangeRate(exchangeRate),
        resultValue: convertResult(resultValue),
      },
    })
  }

  render() {
    const { data, date } = this.props.currenciesData
    const { form, result } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kalkulator</h2>
        <CalcForm
          currenciesCollection={[PLN, ...data]}
          setResult={this.setResult}
          setFormInfos={this.setFormInfos}
        />
        {result.resultValue && <CalcResult rateDate={date} {...form} {...result} />}
      </div>
    )
  }
}

export default CalculatorView
