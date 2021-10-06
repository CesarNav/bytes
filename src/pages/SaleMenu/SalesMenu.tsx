import { InfoSales } from "./InfoSales";

import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./SalesMenu.scss";

export function SalesMenu() {
  return (
    <div className="Canvas">
      <header className="Header">
        <label className="SectionLabel">
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button className="ButtonAdd">Agregar</button>
        </div>
      </header>

      <main className="Main">
        <div className="FormContainer">
          <div className="BarHeader">
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
          <div>
            <InfoSales />
            <InfoSales />
            <InfoSales />
            <InfoSales />
            <InfoSales />
          </div>
        </div>
      </main>
    </div>
  );
}
