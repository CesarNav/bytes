import { TiTags } from "react-icons/ti";
import { BiCube, BiUser } from "react-icons/bi";
import { SiShopware } from "react-icons/si";

import { Switch, Route, Link } from "react-router-dom";

import { SalesMenu } from "../SaleMenu/SalesMenu";

import "./SideBar.scss";

export function SideBar() {
  return (
    <div className="CanvasLayer">
      <aside className="Aside">
        <div className="AsideContent">
          <div className="LogoContainer">
            <SiShopware size="8em" />
          </div>
          <div className="ButtonRouters">
            <div className="Btn-Cont Cont_Sales">
              <TiTags className="IconRouter" size="3.5em" />
              <Link className="ButtonRouter" to="Sales-Menu">
                Ventas
              </Link>
            </div>
            <div className="Btn-Cont Cont_Products">
              <BiCube className="IconRouter" size="3.5em" />
              <Link className="ButtonRouter" to="/">
                Productos
              </Link>
            </div>
            <div className="Btn-Cont Cont_Users">
              <BiUser className="IconRouter" size="3.5em" />
              <Link className="ButtonRouter" to="/">
                Usuarios
              </Link>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <Route path="/Sales-Menu">
          <SalesMenu />
        </Route>
      </main>
    </div>
  );
}
