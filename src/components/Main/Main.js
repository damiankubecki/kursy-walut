import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.scss'
import data from './../../assets/data/data'
import DefaultView from './Views/DefaultView/DefaultView'
import SearchView from './Views/SearchView/SearchView'
import CalculatorView from './Views/CalculatorView/CalculatorView'
import CuriositesView from './Views/CuriositesView/CuriositesView'
import InfoView from './Views/InfoView/InfoView'
import MainContext from './context'

class Main extends React.Component {
  state = {
    currencies: {},
    title: 'Title',
  }

  componentDidMount() {
    data
      .getLastRatesOfAllCurrecies()
      .then(response => {
        this.props.setLoading(false)
        this.setState({
          currencies: response,
        })
      })
      .catch(err => console.log(err, 'nie udalo sie pobrac'))
  }

  changeTitle = newTitle => this.setState({ title: newTitle })

  render() {
    const context = {
      ...this.state,
      changeTitle: this.changeTitle,
    }
    return (
      <MainContext.Provider value={context}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> {this.state.title}</h2>
          <Routes>
            <Route exact path="/" element={<DefaultView />} />
            <Route exact path="/search" element={<SearchView />} />
            <Route path="/calculator" element={<CalculatorView />} />
            <Route path="/curiosites" element={<CuriositesView />} />
            <Route path="/info" element={<InfoView />} />
          </Routes>
        </div>
      </MainContext.Provider>
    )
  }
}

export default Main
