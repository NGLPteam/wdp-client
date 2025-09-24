"use client";

/* Adapted but heavily modified from react-transition-progress */

import {
  PropsWithChildren,
  createContext,
  useContext,
  useOptimistic,
} from "react";
import LoadingBlock from "@/components/atomic/loading/LoadingBlock";

const ProgressBarContext = createContext<{
  start: (slugChanged: boolean) => void;
  loading: boolean;
  slugChange: boolean;
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
  const [slugChange, setEntityChange] = useOptimistic(false);

  const start = (slugChanged: boolean) => {
    setLoading(true);
    if (slugChanged) setEntityChange(true);
  };

  return (
    <ProgressBarContext.Provider value={{ start, loading, slugChange }}>
      {children}
    </ProgressBarContext.Provider>
  );
}

export function useProgress() {
  const { start } = useProgressBarContext();

  return (slugChanged: boolean) => {
    start(slugChanged);
  };
}

export function ProgressCheck({
  children,
  fallback,
  triggerOnSlugChange = false,
}: PropsWithChildren & {
  fallback?: React.ReactNode;
  triggerOnSlugChange?: boolean;
}) {
  const { loading, slugChange } = useProgressBarContext();

  if (!loading) return children;

  if (triggerOnSlugChange && !slugChange) return children;

  return (
    fallback ?? (
      <div>
        <LoadingBlock />
      </div>
    )
  );
}
