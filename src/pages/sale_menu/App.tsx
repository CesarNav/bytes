import React from "react";
import { SideBar } from "./components/SideBar";
import { SalesMenu } from "./components/SalesMenu";

import "./styles/styles.scss";

function App() {
  return (
    <div>
      <aside className="aside">
        <SideBar />
      </aside>
      <main className="main">
        <SalesMenu />
      </main>
    </div>
  );
}

export default App;
