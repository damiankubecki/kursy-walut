const convertSum = value => {
  value = value.toFixed(2).toString().replace('.', ',')
  let valueLength = value.length - 3
  let loops = 1
  while (valueLength / 3 >= 1) {
    value = value.split('').reverse()
    value.splice(4 * loops++ + 2, 0, ' ').reverse()
    value = value.reverse().join('')
    valueLength -= 3
  }
  return value
}

const convertResult = value => {
  value = value.toFixed(2).toString().replace('.', ',')
  let valueLength = value.length - 3
  let loops = 1
  while (valueLength / 3 >= 1) {
    value = value.split('').reverse()
    value.splice(4 * loops++ + 2, 0, ' ').reverse()
    value = value.reverse().join('')
    valueLength -= 3
  }
  return value
}

const convertExchangeRate = exchangeRate =>
  exchangeRate.toFixed(4).toString().replace('.', ',')

export { convertSum, convertResult, convertExchangeRate }
