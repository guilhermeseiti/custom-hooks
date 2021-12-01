/* eslint-disable react/button-has-type */
import React from 'react';
import useArray from '../Hooks/useArray';

function ArrayComponent() {
  // eslint-disable-next-line object-curly-newline
  const { array, set, push, filter, update, remove, clear } = useArray([1, 2, 3, 4, 5, 6, 7]);

  return (
    <>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(8)}>Add</button>
      <button onClick={() => update(4, 9)}>Change</button>
      <button onClick={() => remove(1)}>Remove</button>
      <button onClick={() => filter((n) => n < 5)}>Filter</button>
      <button onClick={() => set([1, 2])}>Set</button>
      <button onClick={clear}>Clear</button>
    </>
  );
}
export default ArrayComponent;
