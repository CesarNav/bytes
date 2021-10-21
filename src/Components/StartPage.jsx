import { TiTags } from "react-icons/ti";
// import { BiCube, BiUser } from "react-icons/bi";
import { SiShopware } from "react-icons/si";

import { Route, Link } from "react-router-dom";

import MenuSales from "./Menus/MenuSales";
import MenuProducts from "./Menus/MenuProducts";
import MenuUsers from "./Menus/MenuUsers";

import "../Styles/StartPage.scss";

const StartPage = () => {
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
            {/* <Link className="Btn-Cont Cont_Products" to="/Products-Menu">
              <BiCube className="IconRouter" size="3.5em" />
              <label className="ButtonRouter">Productos</label>
            </Link>
            <Link className="Btn-Cont Cont_Users" to="/Users-Menu">
              <BiUser className="IconRouter" size="3.5em" />
              <label className="ButtonRouter">Usuarios</label>
            </Link> */}
          </div>
        </div>
      </aside>

      <Route path="/Sales-Menu">
        <MenuSales />
      </Route>

      <Route path="/Products-Menu">
        <MenuProducts />
      </Route>

      <Route path="/Users-Menu">
        <MenuUsers />
      </Route>
    </div>
  );
};

export default StartPage;
