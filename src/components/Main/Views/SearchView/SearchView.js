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
  openResultWindow = (currency, ratesNumber) => {
    Data.getLastRatesOfCurrency(currency, ratesNumber).then(response => {
      this.setState({ result: { isWindowActive: true, data: { ...response } } })
    })
  }
  closeResultWindow = () => {
    this.setState({ result: { isWindowActive: false, data: {} } })
  }

  formSubmit = () => {
    const { form } = this.state
    this.openResultWindow(form.currency?.code, form.ratesNumber)
  }

  render() {
    const { form, result } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          submitFn={this.formSubmit}
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
