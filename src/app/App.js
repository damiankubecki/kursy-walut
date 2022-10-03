import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import InitialScreen from 'app/InitialScreen/InitialScreen';
import Header from 'app/Header/Header';
import Main from 'app/Main/Main';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import { ModalContext } from 'contexts/contexts';

const App = () => {
  const { isModalActive, modalTitle, modalContent, openModal, closeModal } = useModal();
  const [isInitScreenActive, setInitScreenActivity] = useState(true);

  const closeInitScreen = () => setInitScreenActivity(false);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={openModal}>
        <div className="App">
          <Header />
          <Main closeInitScreen={closeInitScreen} />
        </div>
      </ModalContext.Provider>
      {isInitScreenActive && <InitialScreen />}
      {isModalActive && <Modal title={modalTitle} content={modalContent} handleClose={closeModal} />}
    </BrowserRouter>
  );
};

export default App;
