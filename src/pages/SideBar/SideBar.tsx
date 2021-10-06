import { TiTags } from "react-icons/ti";
import { BiCube, BiUser } from "react-icons/bi";
import { SiShopware } from "react-icons/si";

import "./SideBar.scss";

export function SideBar() {
  return (
    <div className="Canvas">
      {/* <header className="Header"></header> */}

      <aside className="Aside">
        <div className="AsideContent">
          <div className="LogoContainer">
            <SiShopware size="8em" />
          </div>
          <div className="ButtonRouters">
            <div className="Btn-Cont Cont_Sales">
              <TiTags className="IconRouter" size="3.5em" />
              <button className="ButtonRouter">Ventas</button>
            </div>
            <div className="Btn-Cont Cont_Products">
              <BiCube className="IconRouter" size="3.5em" />
              <button className="ButtonRouter">Productos</button>
            </div>
            <div className="Btn-Cont Cont_Users">
              <BiUser className="IconRouter" size="3.5em" />
              <button className="ButtonRouter">Usuarios</button>
            </div>
          </div>
        </div>
      </aside>

      {/* <main className="Main">
        <Route path="/SalesMenu"></Route>
        <Route path="/ProductsMenu"></Route>
        <Route path="/UsersMenu"></Route>
      </main> */}

      {/* <footer className="Footer"></footer> */}
    </div>
  );
}
