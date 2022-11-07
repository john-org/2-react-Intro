import React from "react";

export function Button(props) {
  // could have used desctructuring with Button( {color})
  const { color, borderColor } = props;

  return (
    <button
      style={{
        border: "2px solid",
        color: color,
        borderColor: borderColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {props.children}
    </button>
  );
}

export function Buttons() {
  return (
    <div>
      <Button color="red" borderColor="red">
        Cancel
      </Button>
      <Button color="green" borderColor="green">
        Confirm
      </Button>
    </div>
  );
}
