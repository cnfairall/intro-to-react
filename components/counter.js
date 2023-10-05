import React, { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Curse Count</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement (1 Rosary)</button>
      <button type="button" onClick={() => setValue(0)}>Reset (you died)</button>
    </>
  );
}
