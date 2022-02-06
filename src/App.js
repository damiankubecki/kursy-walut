import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import InitialScreen from './components/InitialScreen/InitialScreen'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  state = {
    initScreenActive: true,
  }
  closeInitScreen = () => this.setState({ initScreenActive: false })

  render() {
    return (
      <BrowserRouter>
        <InitialScreen active={this.state.initScreenActive} />
        <div className="App">
          <Header />
          <Main closeInitScreen={this.closeInitScreen} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
