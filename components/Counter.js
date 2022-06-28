import React from "react";
import CountUp from "react-countup";

function Counter({ countNumber, countDecimal, duration }) {
  const endNumber = countNumber;
  const decimalPoint = countDecimal;

  return (
    <CountUp
      end={endNumber}
      duration={ duration }
      decimals={decimalPoint}
    />
  );
}

export default Counter;
