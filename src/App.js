import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import InitialScreen from 'app/InitialScreen/InitialScreen';
import Header from 'app/Header/Header';
import Main from 'app/Main/Main';

const App = () => {
  const [isInitScreenActive, setInitScreenActivity] = useState(true);

  const closeInitScreen = () => setInitScreenActivity(false);

  return (
    <BrowserRouter>
      {isInitScreenActive && <InitialScreen />}
      <div className="App">
        <Header />
        <Main closeInitScreen={closeInitScreen} />
      </div>
    </BrowserRouter>
  );
};

export default App;
