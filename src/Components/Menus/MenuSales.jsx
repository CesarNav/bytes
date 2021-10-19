import { BsPlusSquare, BsSearch } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";

import FormSales from "../Forms/FormSales";

import "../../Styles/Commons/Menu.scss";
import "../../Styles/Modal.scss";

const MenuSales = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <div>
      <header className="Header">
        <label>
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer" onClick={openModalAdd}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          {isOpen && (
            <>
              <article className="Modal" onClick={closeModalAdd}>
                <div
                  className="ModalContainer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="ModalHeader">
                    <label>Registrar Venta</label>
                    <label># 0000000001 </label>
                  </div>

                  <div className="InputsContainer">
                    <label>Tipo documento cliente</label>
                    <input id="document_type"></input>
                    <label>Numero documento cliente</label>
                    <input id="id_document"></input>
                    <label>Nombre cliente</label>
                    <input id="name_custumer"></input>
                  </div>

                  <div className="ButtonsContainer">
                    <button>Guardar</button>
                    <button className="ModalClose" onClick={closeModalAdd}>
                      Cancelar
                    </button>
                  </div>
                </div>
              </article>
            </>
          )}
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
          <FormSales />
        </div>
      </main>
    </div>
  );
};

export default MenuSales;
