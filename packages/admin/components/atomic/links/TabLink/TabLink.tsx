import { NamedLink } from "components/atomic";
import { Tab } from "components/atomic/navs/TabNav";

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
      <Tab
        as="a"
        className={`t-label-${size}`}
        active={active}
        bottomBorder={bottomBorder}
      >
        {children}
      </Tab>
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
