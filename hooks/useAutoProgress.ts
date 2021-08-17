import { useState, useEffect } from "react";

/**
 * Automatically progresses from 0 - 99%.
 * For use in progress bars.
 */
export default function useAutoProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let currentStep = 0;
    let step = 0.5;

    const interval = setInterval(function () {
      currentStep += step;
      const newValue =
        Math.round((Math.atan(currentStep) / (Math.PI / 2)) * 100 * 1000) /
        1000;
      setPercent(newValue);

      if (percent >= 100) {
        clearInterval(interval);
      } else if (percent >= 70 && step !== 0.1) {
        step = 0.1;
      }
    }, 100);

    return function cleanup() {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // on load

  return percent;
}
