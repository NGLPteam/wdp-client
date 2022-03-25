import { Ref, useRef, useState } from "react";

interface ReturnType<T extends string> {
  ref: Ref<HTMLDetailsElement>;
  icon: T;
  onToggle: () => void;
}

interface Props<T extends string> {
  iconClosed: T;
  iconOpen: T;
}

export default function useDetailsToggle<T extends string>({
  iconClosed,
  iconOpen,
}: Props<T>): ReturnType<T> {
  const ref = useRef<HTMLDetailsElement>(null);
  const [icon, toggleIcon] = useState<T>(iconClosed);

  const onToggle = () => {
    if (!ref.current?.open) {
      toggleIcon(iconOpen);
      return;
    }
    toggleIcon(iconClosed);
  };

  return { ref, icon, onToggle };
}
