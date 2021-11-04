import { useMemo } from "react";
import { useWindowSize } from "./index";
import { breakpoints } from "theme/base/variables";

const useIsMobile = () => {
  const size = useWindowSize();
  // If mobile, set view to grid and hide view controls
  const isMobile = useMemo(
    () => size.width && size.width <= parseInt(breakpoints.tableBreak, 10),
    [size]
  );

  return isMobile;
};

export default useIsMobile;
