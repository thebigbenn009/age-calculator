import React from "react";

const Age = ({ num, age }) => {
  return (
    <h1 className="age">
      <span className="age-span">{num}</span> {age}
    </h1>
  );
};

export default Age;
