/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import useUpdate from '../Hooks/useUpdate';

function UpdateComponent() {
  const [count, setCount] = useState(10);
  useUpdate(() => alert(count), [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UpdateComponent;
