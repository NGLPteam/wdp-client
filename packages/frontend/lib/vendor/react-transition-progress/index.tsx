"use client";

/* Adapted but heavily modified from react-transition-progress */

import {
  PropsWithChildren,
  createContext,
  useContext,
  useOptimistic,
} from "react";

const ProgressBarContext = createContext<{
  start: () => void;
  loading: boolean;
} | null>(null);

export function useProgressBarContext() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error(
      "Make sure to use `ProgressBarProvider` before using the progress bar.",
    );
  }

  return progress;
}

export function ProgressBarProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useOptimistic(false);

  const start = () => {
    setLoading(true);
  };

  return (
    <ProgressBarContext.Provider value={{ start, loading }}>
      {children}
    </ProgressBarContext.Provider>
  );
}

export function useProgress() {
  const progress = useProgressBarContext();

  return () => {
    progress.start();
  };
}
