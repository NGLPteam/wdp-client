// https://usehooks.com/

import { useCallback, useState } from "react";

// Parameter is the boolean, with default "false" value
const useToggle = (
  initialState = false
): [boolean, () => void, (newValue: boolean) => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);

  // We may need to set the state
  const set = useCallback((newValue: boolean): void => setState(newValue), []);

  return [state, toggle, set];
};

export default useToggle;
