import { TiTags } from "react-icons/ti";
import { BiCube, BiUser } from "react-icons/bi";
import { SiShopware } from "react-icons/si";

import { Route, Link } from "react-router-dom";

import SalesMenu from "./Menus/SalesMenu";
import ProductsMenus from "./Menus/ProductsMenu";
import UsersMenu from "./Menus/UsersMenu";

import "../Styles/SideBar.scss";

const SideBar = () => {
  return (
    <div className="CanvasLayer">
      <aside className="Aside">
        <div className="AsideContent">
          <div className="LogoContainer">
            <SiShopware size="10em" />
          </div>
          <div className="ButtonRouters">
            <Link className="Btn-Cont Cont_Sales" to="/Sales-Menu">
              <TiTags className="IconRouter" size="3.5em" />
              <label className="ButtonRouter">Ventas</label>
            </Link>
            <Link className="Btn-Cont Cont_Products" to="/Products-Menu">
              <BiCube className="IconRouter" size="3.5em" />
              <label className="ButtonRouter">Productos</label>
            </Link>
            <Link className="Btn-Cont Cont_Users" to="/Users-Menu">
              <BiUser className="IconRouter" size="3.5em" />
              <label className="ButtonRouter">Usuarios</label>
            </Link>
          </div>
        </div>
      </aside>

      <Route path="/Sales-Menu">
        <SalesMenu />
      </Route>

      <Route path="/Products-Menu">
        <ProductsMenus />
      </Route>

      <Route path="/Users-Menu">
        <UsersMenu />
      </Route>
    </div>
  );
};

export default SideBar;
