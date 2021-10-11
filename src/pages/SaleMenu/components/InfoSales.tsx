import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoSales.scss";

import UseModal from "../../ModalWindow/UseModal";

const InfoSales = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <form className="Form">
      <label>#123456789</label>
      <label>CC. ##########</label>
      <label>Usuario Nombre Apellido</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={toggleModal}>
          <FiEdit className="Icons" size="1.8em" />
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Editar Venta</label>
              <label># 000000001</label>
            </div>

            <div className="InputsContainer">
              <label>Tipo documento cliente</label>
              <input placeholder=""></input>
              <label>Numero documento cliente</label>
              <input placeholder=""></input>
              <label>Nombre cliente</label>
              <input placeholder=""></input>
            </div>
          </UseModal>
        </div>

        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default InfoSales;
