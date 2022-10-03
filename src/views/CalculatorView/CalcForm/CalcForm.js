import React, { useContext } from 'react';
import styles from './CalcForm.module.scss';
import { calculateResult } from './functions/calculateResult';
import ChooseCurrenciesSection from './ChooseCurrenciesSection/ChooseCurrenciesSection';
import SumSection from './SumSection/SumSection';
import Button from 'components/Button/Button';
import { findCurrencyByCode } from 'functions/findCurrencyByCode';
import { calculatorViewConfig } from 'config';
import { ModalContext } from 'contexts/contexts';

const { initialCurrenciesCodes } = calculatorViewConfig;

class CalcForm extends React.Component {
  state = {
    fromCurrency: findCurrencyByCode(this.props.currenciesCollection, initialCurrenciesCodes.from),
    toCurrency: findCurrencyByCode(this.props.currenciesCollection, initialCurrenciesCodes.to),
    sum: null,
  };
  static contextType = ModalContext;

  setCurrency = e => {
    if (!this.state.hasOwnProperty(e.target.name)) throw new Error(`Unknown '${e.target.name}' state property`);

    const { currenciesCollection } = this.props;
    this.setState({
      [e.target.name]: findCurrencyByCode(currenciesCollection, e.target.value),
    });
  };
  clearSelectedCurrencies = () => {
    this.setState({ fromCurrency: null, toCurrency: null });
  };
  switchSelectedCurrencies = () => {
    const previousData = { ...this.state };
    this.setState({
      fromCurrency: previousData.toCurrency,
      toCurrency: previousData.fromCurrency,
    });
  };

  setSum = value => this.setState({ sum: value });
  clearSum = () => this.setState({ sum: null });

  render() {
    const submit = e => {
      e.preventDefault();
      const { setFormInfos, setResult, clearResult } = this.props;
      clearResult();
      const result = calculateResult(this.state);
      if (result.error) return this.context('Błąd', <p>{result.error}</p>);

      setFormInfos(this.state);
      setResult(result.exchangeRate, result.resultValue);
    };
    const { currenciesCollection } = this.props;
    const { fromCurrency } = this.state;
    return (
      <form className={styles.wrapper} onSubmit={submit}>
        <ChooseCurrenciesSection
          currenciesCollection={currenciesCollection}
          setCurrency={this.setCurrency}
          switchSelectedCurrencies={this.switchSelectedCurrencies}
          clearSelectedCurrencies={this.clearSelectedCurrencies}
          {...this.state}
        />
        <SumSection fromCurrencyCode={fromCurrency?.code} setSum={this.setSum} clearSum={this.clearSum} />
        <Button margin="30px 0 0" type="submit">
          Przelicz
        </Button>
      </form>
    );
  }
}

export default CalcForm;
