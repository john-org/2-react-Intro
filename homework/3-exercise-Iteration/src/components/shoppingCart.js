import React from "react";
import CartTable from "./cartTable";
import "./shopping-cart.css";

const items = [
  {
    id: "hk123",
    imageSrc: "/cart/shopping-cart-coffee-machine.jpg",
    imageAlt: "A pink drip coffee machine with the “Hello Kitty” logo",
    title: "“Hello Kitty” Coffee Machine",
    price: "89.99",
    inStock: true,
  },
  {
    id: "co999",
    imageSrc: "/cart/shopping-cart-can-opener.jpg",
    imageAlt: "A black can opener",
    title: "Safety Can Opener",
    price: "19.95",
    inStock: false,
  },
  {
    id: "cnl333",
    imageSrc: "/cart/shopping-cart-night-light.png",
    imageAlt: "A kid-friendly nightlight sculpted to look like a dog astronaut",
    title: "Astro-pup Night Light",
    price: "130.00",
    inStock: true,
  },
  {
    id: "scb777",
    imageSrc: "/cart/shopping-cart-backpack.jpg",
    imageAlt: "A pink backpack with a unicorn illustration",
    title: "Magical Unicorn Backpack",
    price: "74.98",
    inStock: true,
  },
];

export function ShoppingCart() {
  return (
    <div>
      <h2>Shopping cart</h2>
      <CartTable items={items} />
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      {/*
      TODO: A second CartTable for
      out-of-stock items
    */}
    </div>
  );
}
