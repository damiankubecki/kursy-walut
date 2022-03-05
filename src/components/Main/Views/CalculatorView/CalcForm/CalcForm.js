import React from 'react'
import styles from './CalcForm.module.scss'
import OptionsList from './OptionsList/OptionsList'
import Button from '../../../../elements/Button/Button'

// const CalcForm = ({
//   convertFrom,
//   convertTo,
//   currencies,
//   selectFn,
//   switchConvertedCurrencies,
//   handleSumChange,
// }) => {
//   return (
//     <form className={styles.wrapper}>
//       <div className={styles.currenciesSection}>
//         <OptionsList
//           listName="convertFrom"
//           currencies={currencies}
//           selectedCurrency={convertFrom}
//           otherSelectedCurrency={convertTo}
//           selectFn={selectFn}
//         >
//           Mam
//         </OptionsList>
//         <Button noBorder bigger margin="5px" onClick={switchConvertedCurrencies}>
//           <i className="fa-solid fa-right-left"></i>
//         </Button>
//         <OptionsList
//           listName="convertTo"
//           currencies={currencies}
//           selectedCurrency={convertTo}
//           otherSelectedCurrency={convertFrom}
//           selectFn={selectFn}
//         >
//           Chcę otrzymać
//         </OptionsList>
//       </div>
//       <div className={styles.sumSection}>
//         <p className={styles.title}>Kwota</p>
//         <div className={styles.sumContainer}>
//           <input
//             className={styles.sum}
//             type="number"
//             name="sum"
//             placeholder="Wpisz kwotę"
//             onChange={handleSumChange}
//           />
//           <p className={styles.code}>{convertFrom.code}</p>
//         </div>
//       </div>
//       <Button bigger margin="30px 0 0">
//         Przelicz
//       </Button>
//     </form>
//   )
// }

class CalcForm extends React.Component {
  render() {
    const {
      convertFrom,
      convertTo,
      currencies,
      selectFn,
      switchConvertedCurrencies,
      handleSumChange,
    } = this.props
    return (
      <form className={styles.wrapper}>
        <div className={styles.currenciesSection}>
          <OptionsList
            listName="convertFrom"
            currencies={currencies}
            selectedCurrency={convertFrom}
            otherSelectedCurrency={convertTo}
            selectFn={selectFn}
          >
            Mam
          </OptionsList>
          <Button noBorder bigger margin="5px" onClick={switchConvertedCurrencies}>
            <i className="fa-solid fa-right-left"></i>
          </Button>
          <OptionsList
            listName="convertTo"
            currencies={currencies}
            selectedCurrency={convertTo}
            otherSelectedCurrency={convertFrom}
            selectFn={selectFn}
          >
            Chcę otrzymać
          </OptionsList>
        </div>
        <div className={styles.sumSection}>
          <p className={styles.title}>Kwota</p>
          <div className={styles.sumContainer}>
            <input
              className={styles.sum}
              type="number"
              name="sum"
              placeholder="Wpisz kwotę"
              onChange={handleSumChange}
            />
            <p className={styles.code}>{convertFrom.code}</p>
          </div>
        </div>
        <Button bigger margin="30px 0 0">
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
