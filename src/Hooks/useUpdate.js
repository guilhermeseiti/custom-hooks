/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

export default function useUpdate(callBack, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callBack();
  }, dependencies);
}
