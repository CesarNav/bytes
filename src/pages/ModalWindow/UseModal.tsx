import React from "react";
import Modal from "./Modal";

interface UseModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const UseModal: React.FC<UseModalProps> = ({
  onBackdropClick,
  isModalVisible,
  children,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return <Modal onBackdropClick={onBackdropClick}>{children}</Modal>;
};

export default UseModal;
