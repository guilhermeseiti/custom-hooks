/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import usePrevious from '../Hooks/usePrevious';

function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Gui');
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        Current: {count} - Previous: {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName('Your Name')}>Change Name</button>
    </>
  );
}

export default PreviousComponent;
