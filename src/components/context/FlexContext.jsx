import { createContext, useContext, useEffect, useState } from "react";

const FlexContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFlex() {
  return useContext(FlexContext);
}

export default function FlexProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [flex, setFlex] = useState(false);

  // Set width

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  //Check width against 600px (for mobile L)

  useEffect(() => {
    updateFlex(width);
  }, [width]);

  function updateFlex(width) {
    if (width < 1000) {
      setFlex(true);
    } else {
      setFlex(false);
    }
  }

  return <FlexContext.Provider value={flex}>{children}</FlexContext.Provider>;
}

FlexProvider.propTypes;
