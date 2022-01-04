import { useEffect, useState } from "react";

// Check if page has mounted
// Needed for some Reakit popups that are rendered after a user trigger
export default function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  return isMounted;
}
