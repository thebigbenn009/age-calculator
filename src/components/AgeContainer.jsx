import React from "react";
import Age from "./Age";
import { useGlobalContext } from "../Context";

const AgeContainer = () => {
  const { userAge } = useGlobalContext();
  return (
    <div>
      <Age
        num={userAge.year}
        age={`${userAge.year === 1 ? "year" : "years"}`}
      />
      <Age
        num={userAge.month}
        age={`${userAge.month === 1 ? "month" : "months"}`}
      />
      <Age num={userAge.day} age={`${userAge.day === 1 ? "day" : "days"}`} />
    </div>
  );
};

export default AgeContainer;
