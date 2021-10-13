import { BsPlusSquare, BsSearch } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";
import Modal from "../Modal";

import FormProducts from "../Forms/FormProducts";

import "../../Styles/Commons/Menu.scss";

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
            <Modal title="Registrar Producto" closeModal={closeModalAdd}>
              <label>Descripcion</label>
              <textarea></textarea>
            </Modal>
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
