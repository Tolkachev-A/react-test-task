import React from "react";

import { Route, Routes } from "react-router-dom";

import { Product } from "components/Product";
import { Products } from "components/Products";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header ">
        <p>Test Task</p>
      </header>
      <main className={"main"}>
        <Routes>
          <Route path={"/"} element={<Products />} />
          <Route path={"/:id"} element={<Product />} />
        </Routes>
      </main>
    </div>
  );
};
