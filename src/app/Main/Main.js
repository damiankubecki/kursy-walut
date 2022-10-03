import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.scss'
import data from '../../assets/data/fetchData'
import HomeView from './Views/HomeView/HomeView'
import SearchView from './Views/SearchView/SearchView'
import CalculatorView from './Views/CalculatorView/CalculatorView'
import CuriositesView from './Views/CuriositesView/CuriositesView'

class Main extends React.Component {
  state = {
    currenciesData: {},
    loading: true,
  }

  async componentDidMount() {
    try {
      const currenciesData = await data.getLastRatesOfAllCurrecies()
      this.setState({ currenciesData: currenciesData, loading: false })
      setTimeout(() => this.props.closeInitScreen(), 800)
    } catch (err) {
      throw new Error('An error occurred in rendering main section')
    }
  }

  render() {
    const { currenciesData, loading } = this.state

    return (
      <div className={styles.wrapper}>
        {!loading && (
          <Routes>
            <Route
              exact
              path="/"
              element={<HomeView currenciesData={currenciesData} />}
            />
            <Route
              exact
              path="/search"
              element={<SearchView currenciesCollection={currenciesData.data} />}
            />
            <Route
              path="/calculator"
              element={<CalculatorView currenciesData={currenciesData} />}
            />
            <Route path="/curiosites" element={<CuriositesView />} />
          </Routes>
        )}
      </div>
    )
  }
}

export default Main
