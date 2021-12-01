/* eslint-disable prettier/prettier */
import { useState } from 'react';

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    setArray((values) => [...values, element]);
  }

  function filter(callback) {
    setArray((values) => values.filter(callback));
  }

  function update(index, newElement) {
    setArray((values) => [
      ...values.slice(0, index),
      newElement,
      ...values.slice(index + 1, values.length),
    ]);
  }

  function remove(index) {
    setArray((values) => [
      ...values.slice(0, index),
      ...values.slice(index + 1, values.length),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
  };
}
