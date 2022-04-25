import React from 'react'
import styles from './SearchForm.module.scss'
import CurrenciesSelectList from '../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'
import Modal from '../../../../elements/Modal/Modal'

class SearchForm extends React.Component {
  state = {
    modal: { isActive: false, content: '' },
  }

  openModal = content => {
    this.setState({
      modal: {
        isActive: true,
        content: content,
      },
    })
  }
  closeModal = () => this.setState({ modal: { isActive: false } })
  submit = async e => {
    e.preventDefault()

    const { currency, ratesNumber, openResultWindow } = this.props

    if (!currency && !ratesNumber) {
      return this.openModal(<p>Nie uzupełniono formularza</p>)
    }
    if (!currency) {
      return this.openModal(<p>Nie wybrano waluty</p>)
    }
    if (!ratesNumber) {
      return this.openModal(<p>Nie wpisano liczby ostatnich notowań</p>)
    }
    const error = await openResultWindow()
    if (error) this.openModal(<p>{error}</p>)
  }

  render() {
    const {
      currenciesCollection,
      ratesNumber,
      currency,
      handleCurrencyChange,
      handleRatesNumberChange,
    } = this.props
    const { modal } = this.state
    return (
      <>
        <form className={styles.wrapper} onSubmit={e => this.submit(e)}>
          <div className={styles.selectContainer}>
            <CurrenciesSelectList
              currenciesCollection={currenciesCollection}
              selectedCurrencyCode={currency?.code}
              onChange={e => handleCurrencyChange(e.target.value)}
            >
              Waluta:
            </CurrenciesSelectList>
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'number'}
              maxLength={2}
              defaultValue={ratesNumber}
              onChange={e => handleRatesNumberChange(e.target.value * 1)}
              onClear={() => handleRatesNumberChange(null)}
            >
              Ilość ostatnich notowań:
            </Input>
          </div>
          <Button bigger>Szukaj</Button>
        </form>
        {modal.isActive && (
          <Modal title={'Błąd'} content={modal.content} onClose={this.closeModal} />
        )}
      </>
    )
  }
}
export default SearchForm
