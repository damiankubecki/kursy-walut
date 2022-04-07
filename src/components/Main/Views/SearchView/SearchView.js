import React from 'react'
import styles from './SearchView.module.scss'
import CurrenciesSelectList from '../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Input from '../../../elements/Input/Input'

class SearchView extends React.Component {
  render() {
    const { currenciesData } = this.props
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <p className={styles.paragraph}>Waluta:</p>
        <CurrenciesSelectList
          currenciesCollection={currenciesData}
        ></CurrenciesSelectList>
        <p className={styles.paragraph}>Ilość ostatnich notowań:</p>
        <Input maxLength={2} />
      </div>
    )
  }
}

export default SearchView
