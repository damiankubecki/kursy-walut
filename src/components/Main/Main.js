import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.scss'
import data from '../../assets/data/fetchData'
import DefaultView from './Views/HomeView/HomeView'
import SearchView from './Views/SearchView/SearchView'
import CalculatorView from './Views/CalculatorView/CalculatorView'
import CuriositesView from './Views/CuriositesView/CuriositesView'
import InfoView from './Views/InfoView/InfoView'

class Main extends React.Component {
  state = {
    currenciesData: {},
    loading: true,
  }

  componentDidMount() {
    data
      .getLastRatesOfAllCurrecies()
      .then(response => {
        this.setState({
          currenciesData: response,
          loading: false,
        })
        setTimeout(() => {
          this.props.closeInitScreen()
        }, 800)
      })
      .catch(err => console.log(err, 'nie udalo sie pobrac danych'))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {!this.state.loading && (
          <Routes>
            <Route
              exact
              path="/"
              element={<DefaultView currenciesData={this.state.currenciesData} />}
            />
            <Route exact path="/search" element={<SearchView />} />
            <Route path="/calculator" element={<CalculatorView />} />
            <Route path="/curiosites" element={<CuriositesView />} />
            <Route path="/info" element={<InfoView />} />
          </Routes>
        )}
      </div>
    )
  }
}

export default Main
