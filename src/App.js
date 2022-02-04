import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import AppContext from './context'

class App extends React.Component {
  state = {
    loading: true,
  }

  setLoading = value => {
    this.setState({
      loading: value,
    })
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading,
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={context}>
          <div className="App">
            <Header />
            <Main setLoading={this.setLoading} />
            <Footer />
            <Loader active={this.state.loading} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
