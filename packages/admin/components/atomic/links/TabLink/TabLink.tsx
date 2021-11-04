import React from "react";
import * as Styled from "./TabLink.styles";
import { NamedLink } from "components/atomic";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

const TabLink = ({
  route,
  active,
  children,
  size = "md",
  bottomBorder = false,
  ...linkProps
}: Props) => {
  return (
    <NamedLink route={route} {...linkProps} passHref>
      <Styled.Tab
        className={`t-label-${size}`}
        active={active}
        bottomBorder={bottomBorder}
      >
        {children}
      </Styled.Tab>
    </NamedLink>
  );
};

interface Props extends NamedLinkProps {
  active?: boolean;
  children?: string | React.ReactNode;
  size?: "md" | "lg";
  bottomBorder?: boolean;
}

export default TabLink;
