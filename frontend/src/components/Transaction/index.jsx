import React, { useState } from "react";
import { Toggle, Title, Detail } from "./styles";

const Transaction = ({ id, amount, type, effectiveDate }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <Toggle type={type} onClick={handleClick}>
      <Title>Transaction {!toggle && ` - ${type} $${amount}`} </Title>
      {toggle && (
        <Detail>
          <p>
            <strong>id:</strong>
            {` ${id}`}
          </p>
          <p>
            <strong>type:</strong>
            {` ${type}`}
          </p>
          <p>
            <strong>amount:</strong>
            {` $${amount}`}
          </p>
          <p>
            <strong>effectiveDate:</strong>
            {` ${effectiveDate}`}
          </p>
        </Detail>
      )}
    </Toggle>
  );
};

export default Transaction;
