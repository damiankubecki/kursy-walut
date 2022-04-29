import axios from 'axios'
import currenciesInfo from './currenciesInfo'

export default class Data {
  static async getLastRatesOfAllCurrecies() {
    const apiLink = 'https://api.nbp.pl/api/exchangerates/tables/a/'
    try {
      const response = await axios.get(apiLink)
      return {
        date: response.data[0].effectiveDate,
        data: response.data[0].rates.map(currency => {
          const staticInfo = currenciesInfo.find(info => info.code === currency.code)
          return { category: 99, ...currency, ...staticInfo }
        }),
      }
    } catch (err) {
      throw new Error(`Cannot fetch the data from ${apiLink}`)
    }
  }

  static async getLastRatesOfCurrency(currencyCode, lastRatesNumber) {
    const apiLink = `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/last/${lastRatesNumber}/`
    try {
      const response = await axios.get(apiLink)
      return [...response.data.rates].map(rate => {
        return {
          date: rate.effectiveDate,
          mid: rate.mid,
        }
      })
    } catch (err) {
      throw new Error(`Cannot fetch the data from ${apiLink}`)
    }
  }
}
