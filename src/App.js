import React from 'react'
import { css } from '@emotion/react'
import Loader from 'react-spinners/PulseLoader'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import AppContext from './context'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

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
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <div className="App">
            <Header />
            <Main setLoading={this.setLoading} />
            <Footer />
            <Loader color={'red'} loading={this.state.loading} css={override} size={20} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
