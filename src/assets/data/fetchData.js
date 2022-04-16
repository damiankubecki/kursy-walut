import axios from 'axios'
import currenciesInfo from './currenciesInfo'

export default class Data {
  static getLastRatesOfAllCurrecies() {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.nbp.pl/api/exchangerates/tables/a/')
        .then(res => {
          const response = {
            date: res.data[0].effectiveDate,
            data: res.data[0].rates,
          }
          resolve({
            date: response.date,
            data: response.data.map(currency => {
              const staticInfo = currenciesInfo.find(
                info => info.code === currency.code
              )
              return { category: 99, ...currency, ...staticInfo }
            }),
          })
        })
        .catch(() => {
          reject()
          throw new Error('Cannot fetch the data')
        })
    })
  }

  static getLastRatesOfCurrency(currencyCode, lastRatesNumber) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/last/${lastRatesNumber}/`
        )
        .then(res => {
          resolve({
            currency: res.data.currency,
            ...currenciesInfo.find(currency => currency.code === res.data.code),
            rates: [...res.data.rates].map(rate => {
              return {
                date: rate.effectiveDate,
                mid: rate.mid,
              }
            }),
          })
        })
        .catch(() => {
          reject()
          throw new Error('Cannot fetch the data')
        })
    })
  }
}
