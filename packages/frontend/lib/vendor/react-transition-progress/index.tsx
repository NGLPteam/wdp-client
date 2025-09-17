"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
  useOptimistic,
  useRef,
} from "react";

/**
 * Internal context for the progress bar.
 */
const ProgressBarContext = createContext<ReturnType<
  typeof useProgressInternal
> | null>(null);

/**
 * Reads the progress bar context.
 */
export function useProgressBarContext() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error(
      "Make sure to use `ProgressBarProvider` before using the progress bar.",
    );
  }

  return progress;
}

// function random(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

/**
 * This function calculates a difference (`diff`) based on the input number (`current`).
 *
 * - If `current` is exactly 0, `diff` is set to 15.
 * - If `current` is less than 50 (but not 0), `diff` is set to a random number between 1 and 10.
 * - If `current` is 50 or more, `diff` is set to a random number between 1 and 5.
 */
function getDiff(
  /** The current number used to calculate the difference. */
  current: number,
): number {
  let diff;
  if (current === 0) {
    diff = 20;
  } else if (current < 50) {
    diff = 10;
  } else {
    diff = 5;
  }

  return diff;
}

/**
 * Custom hook for managing progress state and animation.
 * @returns An object containing the current state, spring animation, and functions to start and complete the progress.
 */
export function useProgressInternal() {
  const [loading, setLoading] = useOptimistic(false);
  const [percent, setPercent] = useState(0);

  useInterval(
    () => {
      const newValue = Math.min(percent + getDiff(percent), 99);
      setPercent(newValue);
    },
    loading ? 750 : null,
  );

  useEffect(() => {
    if (!loading) {
      setPercent(0);
    }
  }, [percent, loading]);

  /**
   * Start the progress.
   */
  function start() {
    setLoading(true);
  }

  return { loading, start, percent };
}

/**
 * Custom hook that sets up an interval to call the provided callback function.
 *
 * @param callback - The function to be called at each interval.
 * @param delay - The delay (in milliseconds) between each interval. Pass `null` to stop the interval.
 */
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      tick();

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/**
 * Provides the progress value to the child components.
 *
 * @param children - The child components to render.
 * @returns The rendered ProgressBarContext.Provider component.
 */
export function ProgressBarProvider({ children }: PropsWithChildren) {
  const progress = useProgressInternal();

  return (
    <ProgressBarContext.Provider value={progress}>
      {children}
    </ProgressBarContext.Provider>
  );
}

type StartProgress = () => void;
/**
 * A custom hook that returns a function to start the progress. Call the start function in a transition to track it.
 *
 * @returns The function to start the progress. Call this function in a transition to track it.
 */
export function useProgress(): StartProgress {
  const progress = useProgressBarContext();

  const startProgress: StartProgress = () => {
    progress.start();
  };
  return startProgress;
}
