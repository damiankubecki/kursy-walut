import React from 'react'
import styles from './SearchView.module.scss'

class SearchView extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <p className={styles.paragraph}>Waluta:</p>
        <p className={styles.paragraph}>Ilość ostatnich notowań:</p>
      </div>
    )
  }
}

export default SearchView
