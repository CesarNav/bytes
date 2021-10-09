import InfoSales from "./components/InfoSales";

import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./SalesMenu.scss";

const SalesMenu = () => {
  return (
    <div>
      <header className="Header">
        <label>
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
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
