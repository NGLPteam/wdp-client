import { useState, useEffect, useRef } from "react";

/**
 * Automatically progresses from 0 - 99%.
 * For use in progress bars.
 */
export default function useAutoProgress() {
  const [percent, setPercent] = useState(0);
  const currentStep = useRef(0);
  const step = useRef(0.5);

  useEffect(() => {
    const interval = setInterval(function () {
      currentStep.current += step.current;
      const newValue =
        Math.round(
          (Math.atan(currentStep.current) / (Math.PI / 2)) * 100 * 1000
        ) / 1000;
      setPercent(newValue);

      if (percent >= 100) {
        clearInterval(interval);
      } else if (percent >= 70 && step.current !== 0.1) {
        step.current = 0.1;
      }
    }, 100);

    return function cleanup() {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // on load

  return percent;
}
