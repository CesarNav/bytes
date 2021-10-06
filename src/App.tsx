import React from "react";
import "./App.css";

import Login from "./pages/login/login";

import { SideBar } from "./pages/SideBar/SideBar";
import { SalesMenu } from "./pages/SaleMenu/SalesMenu";

import "./styles/commons/mixin.scss";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <div className="CanvasLayer">
        <SideBar />

        <main className="main">
          <SalesMenu />
        </main>
      </div>
    </div>
  );
}

export default App;
