import React from 'react';
import styles from './CurrencyItem.module.scss';
import variables from 'assets/variables.scss';
import Modal from 'components/Modal/Modal';

const { darkBlackColor } = variables;

class CurrencyItem extends React.Component {
  state = {
    isModalActive: false,
  };

  openModal = () => this.setState({ isModalActive: true });
  closeModal = () => this.setState({ isModalActive: false });

  render() {
    const { isModalActive } = this.state;
    const { currency, code, symbol, country, mid, flag, wikipediaLink } =
      this.props;

    const modalTitle = `Informacje o ${currency}`;
    const modalContent = (
      <div>
        {flag && (
          <img
            src={flag}
            alt="Flaga"
            height="40px"
            style={{ padding: '0 0 10px' }}
          />
        )}
        <ul style={{ listStyle: 'none' }}>
          <li>Kod waluty: {code}</li>
          {symbol && <li>Symbol: {symbol}</li>}
          <li>Kraj/strefa: {country}</li>

          <li>Akutalny kurs: {mid}</li>
          {wikipediaLink && (
            <li>
              Wikipedia:{' '}
              <a href={wikipediaLink} target="_blank" rel="noreferrer">
                Otwórz
              </a>
            </li>
          )}
        </ul>
      </div>
    );
    return (
      <>
        <button className={styles.wrapper} onClick={this.openModal}>
          <p className={styles.code}>{code}</p>
          <p className={styles.mid}>{mid.toFixed(4)}</p>
          <p className={styles.name}>{currency}</p>
          <div
            className={styles.flag}
            style={{
              backgroundImage: `url(${flag || null})`,
              backgroundColor: darkBlackColor,
            }}
          ></div>
        </button>
        {isModalActive && (
          <Modal
            title={modalTitle}
            content={modalContent}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default CurrencyItem;
