import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.scss'
import data from './../../assets/data/data'
import DefaultView from './Views/DefaultView/DefaultView'
import SearchView from './Views/SearchView/SearchView'
import CalculatorView from './Views/CalculatorView/CalculatorView'
import CuriositesView from './Views/CuriositesView/CuriositesView'
import InfoView from './Views/InfoView/InfoView'

class Main extends React.Component {
  state = {
    currencies: {},
  }

  componentDidMount() {
    data
      .getLastRatesOfAllCurrecies()
      .then(response => {
        setTimeout(() => {
          this.props.setLoading(false)
        }, 300)
        this.setState({
          currencies: response,
        })
      })
      .catch(err => console.log(err, 'nie udalo sie pobrac'))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Routes>
          <Route exact path="/" element={<DefaultView />} />
          <Route exact path="/search" element={<SearchView />} />
          <Route path="/calculator" element={<CalculatorView />} />
          <Route path="/curiosites" element={<CuriositesView />} />
          <Route path="/info" element={<InfoView />} />
        </Routes>
      </div>
    )
  }
}

export default Main
