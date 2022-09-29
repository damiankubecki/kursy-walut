import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InitialScreen from 'app/InitialScreen/InitialScreen';
import Header from 'app/Header/Header';
import Main from 'app/Main/Main';
import Footer from 'app/Footer/Footer';

class App extends React.Component {
  state = {
    isInitScreenActive: true,
  };
  closeInitScreen = () => this.setState({ isInitScreenActive: false });

  render() {
    const { isInitScreenActive } = this.state;
    return (
      <BrowserRouter>
        {isInitScreenActive && <InitialScreen />}
        <div className="App">
          <Header />
          <Main closeInitScreen={this.closeInitScreen} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
