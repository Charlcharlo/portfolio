/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FocusContext = createContext();
const SetFocusContext = createContext();

export function useFocus() {
  return useContext(FocusContext);
}

export function useSetFocus() {
  return useContext(SetFocusContext);
}

export default function FocusProvider({ children }) {
  const [focus, setFocus] = useState(false);

  function toggleFocus() {
    setFocus((prev) => {
      return !prev;
    });
  }
  return (
    <FocusContext.Provider value={focus}>
      <SetFocusContext.Provider value={toggleFocus}>
        {children}
      </SetFocusContext.Provider>
    </FocusContext.Provider>
  );
}

FocusProvider.propTypes;
