import { TiTags } from "react-icons/ti";
import { BiCube, BiUser } from "react-icons/bi";
import { SiShopware } from "react-icons/si";

import "./SideBar.scss";

export function SideBar() {
  return (
    <div className="SideBarContainer">
      <div className="LogoContainer">
        <SiShopware size="7em" />
      </div>
      <div className="ButtonContainer">
        <TiTags size="3em" />
        <button className="button">Ventas</button>
      </div>
      <div className="ButtonContainer">
        <BiCube size="3em" />
        <button className="button">Productos</button>
      </div>
      <div className="ButtonContainer">
        <BiUser size="3em" />
        <button className="button">Usuarios</button>
      </div>
    </div>
  );
}
