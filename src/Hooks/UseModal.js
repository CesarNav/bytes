import { useState } from "react";

export const UseModal = () => {
  const [isOpen, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return [isOpen, openModal, closeModal];
};
