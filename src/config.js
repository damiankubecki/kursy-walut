const searchViewConfig = {
  initialCurrencyCode: null,
  initialRatesNumber: 10,
}
const calculatorViewConfig = {
  initialCurrenciesCodes: { from: 'PLN', to: 'EUR' },
}
const curiositesViewConfig = {
  collection: [
    'Na Kubie w obiegu znajdą się dwie różne waluty o zupełnie innej wartości.',
    'Cena nowego Poloneza Caro w latach 90 zaczynała się od 0,0003128571429 Sasina.',
    'W Tajlandi za porwanie banknotu z wizerunkiem króla, czy też jego przydepnięcie można nawet trafić do więzienia.',
    'Zyskującym popularność trendem jest produkcja banknotów plastikowych. Wytworzone z polimeru pieniądze cechują się wyższą żywotnością.',
    'Kostaryka nazwę swoje waluty "colóna" zawdzięcza Krzysztofowi Kolumbowi. Colón to po hiszpańsku bowiem Kolumb.',
    'Najmniejszy banknot Księgi Rekordów Guinnessa funkcjonuje w Rumunii od 1917 roku. Jest to 10 banów, a jego wymiary to zaledwie 2,75 x 3,8 centymetra.',
    'Robert Lewandowski zarabia około 1,54 Sasin rocznie.',
    '14 państw nienależących do UE ma jako walutę narodową euro.',
    'Na Węgrzech po zakończeniu II wojny światowej największym nominałem był banknot 100 000 000 000 000 000 000 pengő czyli sto trylionów, a inflacja wynosiła 41.9 biliarda % w skali miesiąca, co oznaczało podwajanie się cen przeciętnie co każde 15 godzin.',
  ],
  writingTime: 50,
}
const PLN = { code: 'PLN', mid: 1, currency: 'polski złoty', country: 'Polska' }

export { searchViewConfig, calculatorViewConfig, curiositesViewConfig, PLN }
