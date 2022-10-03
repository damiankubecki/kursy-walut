import { useState } from 'react';

const useModal = () => {
  const [isModalActive, setModalActivity] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title, content) => {
    setModalActivity(true);
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => setModalActivity(false);

  return { isModalActive, modalTitle, modalContent, openModal, closeModal };
};

export default useModal;
