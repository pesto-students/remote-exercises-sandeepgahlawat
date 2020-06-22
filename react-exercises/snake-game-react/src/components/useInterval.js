import { useEffect, useRef, useState } from "react";

function useInterval(callback, delay, status, type) {
    const savedCallback = useRef();
    const [start, setStart] = useState(false);
    const id = useRef(false);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (status !== 2 && delay !== null && start) {
        if (type === 'food') {
          if (id.current) clearTimeout(id.current);
          id.current = setTimeout(tick, delay);
        } else {
          id.current = setInterval(tick, delay);
        }
        return () => {
          if (type === 'snake') clearInterval(id.current);
          else clearTimeout(id.current);
        };
      } else {
        if (type === 'snake') clearInterval(id.current);
          else clearTimeout(id.current);
      }
    }, [delay, start, type, status]);
    return [setStart];
  }

  export default useInterval