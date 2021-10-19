import { BsPlusSquare, BsSearch } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";

import FormProducts from "../Forms/FormProducts";

import "../../Styles/Commons/Menu.scss";
import "../../Styles/Modal.scss";

const MenuProducts = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <div>
      <header className="Header">
        <label>
          <b>Productos</b>
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
                    <label>Registrar Producto</label>
                    <label># 0000000001 </label>
                  </div>

                  <div className="InputsContainer">
                    <label>Descripcion</label>
                    <textarea></textarea>
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
            <b>Identificador</b>
          </label>
          <label>
            <b>Descripcion</b>
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
          <FormProducts />
        </div>
      </main>
    </div>
  );
};

export default MenuProducts;
