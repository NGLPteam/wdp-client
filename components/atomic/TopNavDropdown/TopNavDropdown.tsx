import React, { useRef } from "react";
import * as Styled from "./TopNavDropdown.styles";
import useFocusTrap from "hooks/useFocusTrap";
import { useKeyDownEvent } from "hooks/listeners";
import { TopNavItem } from "..";

// TODO: Simplify with Reakit/Menu
// TODO: Abstrct into Dropdown component that can take any styled button for activiation
const TopNavDropdown = ({
  children,
  id,
  active,
  label,
  onToggleClick,
  onEsc,
}: Props) => {
  const ref = useRef(null);

  const handleKeyDown = ({ key }) => {
    if (!active || key !== "Escape") return;
    onEsc();
  };

  useFocusTrap(ref, active);
  useKeyDownEvent(handleKeyDown);

  return (
    <Styled.Wrapper ref={ref}>
      <TopNavItem
        onClick={() => onToggleClick(id)}
        aria-expanded={active}
        aria-haspopup
        active={active}
      >
        {label}
      </TopNavItem>
      <Styled.Dropdown>{children}</Styled.Dropdown>
    </Styled.Wrapper>
  );
};

interface Props {
  active?: boolean;
  children: React.ReactNode[];
  id: string;
  label: string;
  onToggleClick: (string) => void;
  onEsc: () => void;
}

export default TopNavDropdown;
