import { InfoSales } from "./InfoSales";

import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "../styles/components/SalesMenu.scss";

export function SalesMenu() {
  return (
    <div className="CanvasSales">
      <header className="SalesMenuHeader">
        <p>
          <b>Ventas</b>
        </p>
        <div className="ButtonContainer">
          <BsPlusSquare size="1.5em" />
          <button className="ButtonAdd">Agregar</button>
        </div>
      </header>

      <main className="SalesContMain">
        <div className="BarHeader">
          <p>
            <b>ID Venta</b>
          </p>
          <p>
            <b>ID Cliente</b>
          </p>
          <p>
            <b>Nombre Cliente</b>
          </p>
          <div className="SearchContainer">
            <BsSearch />
            <input type="search" placeholder="Buscar..."></input>
          </div>
        </div>
        <div className="FormContainer">
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
        </div>
      </main>
    </div>
  );
}
