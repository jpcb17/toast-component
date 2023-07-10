import React from "react";

function useKeydown(key,callback) {
  React.useEffect(() => {
    console.log('escape')
    function handleKeyDownEvent(e) {
      if (e.key === key) {
        callback(e);
      }
    }

    window.addEventListener("keydown", handleKeyDownEvent);

    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [key, callback]);
}

export default useKeydown;
