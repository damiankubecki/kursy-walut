import React from 'react'
import styles from './SearchView.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchResultWindow from './SearchResultWindow/SearchResultWindow'
import Data from '../../../../assets/data/fetchData'

class SearchView extends React.Component {
  state = {
    form: {
      currenciesCollection: this.props.currenciesData,
      currency: this.props.currenciesData.find(currency => currency.code === 'USD'),
      ratesNumber: 10,
    },
    result: {
      isWindowActive: false,
      data: {},
    },
  }

  setCurrency = currencyCode => {
    const currencies = this.state.form.currenciesCollection
    const currency = currencies.find(currency => currency.code === currencyCode)
    this.setState(prevState => {
      return { form: { ...prevState.form, currency: currency } }
    })
  }
  setRatesNumber = number => {
    this.setState(prevState => {
      return { form: { ...prevState.form, ratesNumber: number } }
    })
  }
  fetchCurrencyData = async (currency, ratesNumber) => {
    const lastCurrencyRates = await Data.getLastRatesOfCurrency(
      currency,
      ratesNumber
    )
    this.setState(prevState => {
      return { result: { ...prevState.result, data: { ...lastCurrencyRates } } }
    })
  }
  closeResultWindow = () => {
    this.setState({ result: { isWindowActive: false, data: {} } })
  }
  openResultWindow = async () => {
    const { currency, ratesNumber } = this.state.form
    try {
      await this.fetchCurrencyData(currency.code, ratesNumber)
      this.setState(prevState => {
        return {
          result: {
            ...prevState.result,
            isWindowActive: true,
          },
        }
      })
    } catch (err) {
      return `Dane waluty ${currency.code} nie zostały znalezione`
    }
  }

  render() {
    const { form, result } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          openResultWindow={this.openResultWindow}
          {...form}
        />
        {result.isWindowActive && (
          <SearchResultWindow
            closeWindow={this.closeResultWindow}
            {...result.data}
          />
        )}
      </div>
    )
  }
}

export default SearchView
