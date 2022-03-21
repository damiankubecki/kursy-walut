//infos are added during data fetching
const currencies = [
  {
    code: 'EUR',
    category: 1,
    country: 'Unia Europejska',
    websitePL: 'https://pl.wikipedia.org/wiki/Euro',
  },
  {
    code: 'USD',
    category: 1,
    country: 'USA',
    websitePL: 'https://pl.wikipedia.org/wiki/Dolar_ameryka%C5%84ski',
  },
  {
    code: 'CHF',
    category: 1,
    country: 'Szwajcaria',
    websitePL: 'https://pl.wikipedia.org/wiki/Frank_szwajcarski',
  },
  {
    code: 'GBP',
    category: 1,
    country: 'W. Brytania',
    websitePL: 'https://pl.wikipedia.org/wiki/Funt_szterling',
  },
  {
    code: 'CAD',
    category: 2,
    country: 'Kanada',
    websitePL: 'https://pl.wikipedia.org/wiki/Dolar_kanadyjski',
  },
  {
    code: 'AUD',
    category: 2,
    country: 'Australia',
    websitePL: 'https://pl.wikipedia.org/wiki/Dolar_australijski',
  },
  {
    code: 'RUB',
    category: 2,
    country: 'Rosja',
    websitePL: 'https://pl.wikipedia.org/wiki/Rubel',
  },
  {
    code: 'HUF',
    category: 2,
    country: 'Węgry',
    websitePL: 'https://pl.wikipedia.org/wiki/Forint',
  },
  {
    code: 'UAH',
    category: 2,
    country: 'Ukraina',
    websitePL: 'https://pl.wikipedia.org/wiki/Hrywna',
  },
  {
    code: 'JPY',
    category: 1,
    country: 'Japonia',
    websitePL: 'https://pl.wikipedia.org/wiki/Jen',
  },
  {
    code: 'CZK',
    category: 2,
    country: 'Czechy',
    websitePL: 'https://pl.wikipedia.org/wiki/Korona_czeska',
  },
  {
    code: 'DKK',
    category: 2,
    country: 'Dania',
    websitePL: 'https://pl.wikipedia.org/wiki/Korona_du%C5%84ska',
  },
  {
    code: 'NOK',
    category: 2,
    country: 'Norwegia',
    websitePL: 'https://pl.wikipedia.org/wiki/Korona_norweska',
  },
  {
    code: 'SEK',
    category: 2,
    country: 'Szwecja',
    websitePL: 'https://pl.wikipedia.org/wiki/Korona_szwedzka',
  },
  {
    code: 'HRK',
    category: 2,
    country: 'Chorwacja',
    websitePL: 'https://pl.wikipedia.org/wiki/Kuna_(waluta)',
  },
  {
    code: 'TRY',
    category: 3,
    country: 'Turcja',
    websitePL: 'https://pl.wikipedia.org/wiki/Nowa_lira_turecka',
  },
  {
    code: 'THB',
    category: 5,
    country: 'Tajlandia',
    websitePL: '',
  },
  {
    code: 'HKD',
    category: 5,
    country: 'Hongkong',
    websitePL: '',
  },
  {
    code: 'NZD',
    category: 5,
    country: 'Nowa Zelandia',
    websitePL: '',
  },
  {
    code: 'SGD',
    category: 5,
    country: 'Singapur',
    websitePL: '',
  },
]

currencies.forEach(currency => {
  try {
    currency.flag = require(`./../images/${currency.code}.png`)
  } catch (err) {
    currency.flag = null
  }
})

export default currencies
