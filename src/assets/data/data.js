import axios from 'axios'

export default class Data {
  static getLastRatesOfAllCurrecies() {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.nbp.pl/api/exchangerates/tables/a/')
        .then(res => {
          resolve({
            date: res.data[0].effectiveDate,
            rates: res.data[0].rates,
          })
        })
        .catch(err => reject(err))
    })
  }

  static getLastRatesOfCurrency(currencyCode, days) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/last/${days}/`)
        .then(res => {
          resolve({
            code: res.data.code,
            currency: res.data.currency,
            rates: [...res.data.rates].map(rate => {
              return {
                date: rate.effectiveDate,
                mid: rate.mid,
              }
            }),
          })
        })
        .catch(err => {
          console.log(err)
          reject(false)
        })
    })
  }
}

// const fetchData = dataToFetch => {
//   let interval = setInterval(() => {
//     console.log('trwa pobieranie')
//   }, 5)
//   dataToFetch()
//     .then(res => {
//       console.log('pobrałem juz')
//       return res
//     })
//     .catch(err => {
//       console.log('nie udalo sie')
//     })
//     .finally(() => {
//       clearInterval(interval)
//     })
// }
