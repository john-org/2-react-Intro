import React from "react";
import { createRoot } from "react-dom/client";
import { Avatars } from "./components/avatars";
import { ShoppingCart } from "./components/shoppingCart";

const pageStyles = {
  display: "flex",
  gap: "2rem",
};

const Exercise = () => {
  return (
    <div style={pageStyles}>
      <div>
        <h2>Avatars</h2>
        <Avatars />
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <ShoppingCart />
      </div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Exercise />);
