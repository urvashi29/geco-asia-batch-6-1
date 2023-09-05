import React from "react";

// function based component
const Display = (props) => {
  console.log(props); //object

  // destructuring of object
  const { age, city } = props;

  return (
    <>
      Function component.
      <p>{age}</p>
      <p>{city}</p>
    </>
  );
};

export default Display;

// function add(x, y) {

// }

// add(10, 20);
