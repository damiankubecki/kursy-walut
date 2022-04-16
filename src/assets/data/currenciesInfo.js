//infos are added during data fetching
const currencies = [
  {
    code: 'EUR',
    category: 1,
    country: 'Unia Europejska',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Euro',
  },
  {
    code: 'USD',
    category: 1,
    country: 'USA',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Dolar_ameryka%C5%84ski',
  },
  {
    code: 'CHF',
    category: 1,
    country: 'Szwajcaria',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Frank_szwajcarski',
  },
  {
    code: 'GBP',
    category: 1,
    country: 'W. Brytania',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Funt_szterling',
  },
  {
    code: 'CAD',
    category: 2,
    country: 'Kanada',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Dolar_kanadyjski',
  },
  {
    code: 'AUD',
    category: 2,
    country: 'Australia',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Dolar_australijski',
  },
  {
    code: 'RUB',
    category: 2,
    country: 'Rosja',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Rubel',
  },
  {
    code: 'HUF',
    category: 2,
    country: 'Węgry',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Forint',
  },
  {
    code: 'UAH',
    category: 3,
    country: 'Ukraina',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Hrywna',
  },
  {
    code: 'JPY',
    category: 1,
    country: 'Japonia',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Jen',
  },
  {
    code: 'CZK',
    category: 2,
    country: 'Czechy',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Korona_czeska',
  },
  {
    code: 'DKK',
    category: 2,
    country: 'Dania',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Korona_du%C5%84ska',
  },
  {
    code: 'NOK',
    category: 2,
    country: 'Norwegia',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Korona_norweska',
  },
  {
    code: 'SEK',
    category: 2,
    country: 'Szwecja',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Korona_szwedzka',
  },
  {
    code: 'HRK',
    category: 2,
    country: 'Chorwacja',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Kuna_(waluta)',
  },
  {
    code: 'TRY',
    category: 3,
    country: 'Turcja',
    wikipediaLink: 'https://pl.wikipedia.org/wiki/Nowa_lira_turecka',
  },
  {
    code: 'THB',
    category: 5,
    country: 'Tajlandia',
    wikipediaLink: '',
  },
  {
    code: 'HKD',
    category: 5,
    country: 'Hongkong',
    wikipediaLink: '',
  },
  {
    code: 'NZD',
    category: 5,
    country: 'Nowa Zelandia',
    wikipediaLink: '',
  },
  {
    code: 'SGD',
    category: 5,
    country: 'Singapur',
    wikipediaLink: '',
  },
  {
    code: 'ISK',
    category: 3,
    country: 'Islandia',
    wikipediaLink: '',
  },
  {
    code: 'RON',
    category: 3,
    country: 'Rumunia',
    wikipediaLink: '',
  },
  {
    code: 'BGN',
    category: 3,
    country: 'Bułgaria',
    wikipediaLink: '',
  },
  {
    code: 'ILS',
    category: 3,
    country: 'Izrael',
    wikipediaLink: '',
  },
  {
    code: 'CLP',
    category: 4,
    country: 'Chile',
    wikipediaLink: '',
  },
  {
    code: 'PHP',
    category: 4,
    country: 'Filipiny',
    wikipediaLink: '',
  },
  {
    code: 'MXN',
    category: 3,
    country: 'Meksyk',
    wikipediaLink: '',
  },
  {
    code: 'ZAR',
    category: 5,
    country: 'RPA',
    wikipediaLink: '',
  },
  {
    code: 'BRL',
    category: 5,
    country: 'Brazylia',
    wikipediaLink: '',
  },
  {
    code: 'MYR',
    category: 5,
    country: 'Malezja',
    wikipediaLink: '',
  },
  {
    code: 'IDR',
    category: 5,
    country: 'Indonezja',
    wikipediaLink: '',
  },
  {
    code: 'INR',
    category: 5,
    country: 'Indie',
    wikipediaLink: '',
  },
  {
    code: 'KRW',
    category: 4,
    country: 'Korea Południowa',
    wikipediaLink: '',
  },
  {
    code: 'CNY',
    category: 1,
    country: 'Chiny',
    wikipediaLink: '',
  },
  {
    code: 'XDR',
    category: 99,
    country: '',
    wikipediaLink: '',
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
