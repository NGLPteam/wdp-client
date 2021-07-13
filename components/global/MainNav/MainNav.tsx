import * as Styled from "./MainNav.styles";
import Link from "next/link";
import { LogoPlaceholder } from "components/global";
import MainNavDropdown from "./MainNavDropdown";
import MainNavItem from "./MainNavItem";

const MainNav = ({ children }: Props) => {
  return (
    <Styled.Nav className="a-bg-brand100">
      <Styled.Inner>
        <Link href="/" passHref>
          <LogoPlaceholder>
            <span className="t-label-md">Institution Name</span>
          </LogoPlaceholder>
        </Link>
        <ul className="l-flex l-flex--align-center">
          {children &&
            children.map((child, i) => (
              <Styled.Item key={i}>{child}</Styled.Item>
            ))}
        </ul>
      </Styled.Inner>
    </Styled.Nav>
  );
};

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode[];
}

MainNav.Dropdown = MainNavDropdown;
MainNav.Item = MainNavItem;

export default MainNav;
