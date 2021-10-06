import { BsPlusSquare, BsSearch } from "react-icons/bs";

import InfoProducts from "./components/InfoProducts";

import "./ProductsMenu.scss";

const ProductsMenus = () => {
  return (
    <div>
      <header className="Header">
        <label className="SectionLabel">
          <b>Productos</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button className="ButtonAdd">Agregar</button>
        </div>
      </header>

      <main className="Main MainProducts">
        <div className="Form">
          <div className="BarHeader">
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

          <div>
            <InfoProducts />
            <InfoProducts />
            <InfoProducts />
            <InfoProducts />
            <InfoProducts />
            <InfoProducts />
            <InfoProducts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsMenus;
