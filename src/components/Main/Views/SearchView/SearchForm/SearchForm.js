import React from 'react'
import styles from './SearchForm.module.scss'
import CurrenciesSelectList from '../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'
import Modal from '../../../../elements/Modal/Modal'

class SearchForm extends React.Component {
  state = {
    modal: { isActive: false, title: '', content: '' },
  }

  openModal = ({ title, content }) => {
    this.setState({
      modal: {
        isActive: true,
        title: title,
        content: content,
      },
    })
  }
  closeModal = () => this.setState({ modal: { isActive: false } })
  submit = e => {
    e.preventDefault()

    const { currency, ratesNumber, submitFn } = this.props
    if (!currency && !ratesNumber) {
      return this.openModal({ title: '', content: 'Nie uzupełniono formularza' })
    }
    if (!currency) {
      return this.openModal({ title: 'Błąd', content: 'Nie wybrano waluty' })
    }
    if (!ratesNumber) {
      return this.openModal({
        content: 'Nie wpisano liczby ostatnich notowań',
      })
    }
    submitFn()
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
              selectedCurrency={currency}
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
          <Modal
            title={modal.title}
            content={modal.content}
            onClose={this.closeModal}
          />
        )}
      </>
    )
  }
}
export default SearchForm

// const SearchForm = ({
//   currenciesData,
//   ratesNumber,
//   currency,
//   handleCurrencyChange,
//   handleRatesNumberChange,
//   submitFn,
// }) => {
//   return (
//     <form className={styles.wrapper} onSubmit={e => submitFn(e)}>
//       <div className={styles.selectContainer}>
//         <CurrenciesSelectList
//           currenciesCollection={currenciesData}
//           selectedCurrency={currency}
//           onChange={e => handleCurrencyChange(e.target.value)}
//         >
//           Waluta:
//         </CurrenciesSelectList>
//       </div>
//       <div className={styles.inputContainer}>
//         <Input
//           type={'number'}
//           maxLength={2}
//           defaultValue={ratesNumber}
//           onChange={e => handleRatesNumberChange(e.target.value * 1)}
//           onClear={() => handleRatesNumberChange(null)}
//         >
//           Ilość ostatnich notowań:
//         </Input>
//       </div>
//       <Button bigger>Szukaj</Button>
//     </form>
//   )
// }
