import React from "react";

export function Form() {
  // return <form>{/* Stuff here */}</form>;
  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input type="text" />
      <button className="submit-btn">submit</button>
    </form>
  );
}
