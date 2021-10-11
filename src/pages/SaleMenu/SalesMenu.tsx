import { useState } from "react";
import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./SalesMenu.scss";

import InfoSales from "./components/InfoSales";
import UseModal from "../ModalWindow/UseModal";

const SalesMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <header className="Header">
        <label>
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer" onClick={toggleModal}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Registrar Venta</label>
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
      </header>

      <main className="Main">
        <div className="ItemsBar">
          <label>
            <b>ID Venta</b>
          </label>
          <label>
            <b>ID Cliente</b>
          </label>
          <label>
            <b>Nombre Cliente</b>
          </label>
          <div className="SearchContainer">
            <input
              className="InutSearch"
              type="search"
              placeholder="Buscar..."
            ></input>
            <BsSearch />
          </div>
        </div>

        <div className="FormContainer">
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
        </div>
      </main>
    </div>
  );
};

export default SalesMenu;
