import React from 'react'
import styles from './SearchView.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchResultWindow from './SearchResultWindow/SearchResultWindow'
import Modal from '../../../elements/Modal/Modal'
import Data from '../../../../assets/data/fetchData'

class SearchView extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesData,
    currency: this.props.currenciesData.find(currency => currency.code === 'USD'),
    ratesNumber: 10,
    result: {
      isWindowActive: false,
      data: {},
    },
    modal: {
      isActive: false,
      content: '',
    },
  }

  setCurrency = currencyCode => {
    const currency = this.state.currenciesCollection.find(
      currency => currency.code === currencyCode
    )
    this.setState({ currency: currency })
  }
  setRatesNumber = number => this.setState({ ratesNumber: number })

  openResultWindow = (currency, ratesNumber) => {
    if (!currency)
      return this.setState({
        modal: { isActive: true, content: 'Nie wybrano waluty' },
      })
    if (!ratesNumber)
      return this.setState({
        modal: { isActive: true, content: 'Nie wpisano liczby ostatnich notowań' },
      })
    if (!currency && !ratesNumber)
      return this.setState({
        modal: { isActive: true, content: 'Nie uzupełniono formularza' },
      })
    Data.getLastRatesOfCurrency(currency, ratesNumber).then(response => {
      this.setState({ result: { isWindowActive: true, data: { ...response } } })
    })
  }
  closeResultWindow = () =>
    this.setState({ result: { isWindowActive: false, data: {} } })

  formSubmit = e => {
    e.preventDefault()

    const { currency, ratesNumber } = this.state
    this.openResultWindow(currency.code, ratesNumber)
  }

  render() {
    const { currenciesCollection, currency, ratesNumber, result, modal } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          currenciesData={currenciesCollection}
          currency={currency}
          ratesNumber={ratesNumber}
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          submitFn={this.formSubmit}
        />
        {result.isWindowActive && (
          <SearchResultWindow
            closeWindow={this.closeResultWindow}
            {...result.data}
          />
        )}
        {modal.isActive && <Modal title="Błąd" content={modal.content} />}
      </div>
    )
  }
}

export default SearchView
