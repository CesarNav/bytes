import React from "react";
import "./App.css";

import Login from "./pages/login/login";

import { SideBar } from "./pages/SideBar/SideBar";
import { SalesMenu } from "./pages/SaleMenu/SalesMenu";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      {/* <SideBar /> */}

      <main className="main">
        <SalesMenu />
      </main>
    </div>
  );
}

export default App;
