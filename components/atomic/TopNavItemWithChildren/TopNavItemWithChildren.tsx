import React, { useRef } from "react";
import styled from "styled-components";
import useFocusTrap from "hooks/useFocusTrap";
import { useKeyDownEvent } from "hooks/listeners";
import { TopNavItem } from "..";

const TopNavItemWithChildren = ({
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
    <Wrapper ref={ref}>
      <TopNavItem
        onClick={() => onToggleClick(id)}
        aria-expanded={active}
        aria-haspopup
      >
        {label}
      </TopNavItem>
      <div className={active === true ? "open" : "closed"}>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 30px;
    left: -1em;
    z-index: -1;
    opacity: 0;
    background-color: var(--brand10);
    color: var(--brand90);
    padding: 1em;
    > * {
      display: block;
    }
    &.open {
      opacity: 1;
      z-index: 1;
    }
  }
`;

interface Props {
  active?: boolean;
  children: React.ReactNode[];
  id: string;
  label: string;
  onToggleClick: (string) => void;
  onEsc: () => void;
}

export default TopNavItemWithChildren;
