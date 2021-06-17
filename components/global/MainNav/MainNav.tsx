import * as Styled from "./MainNav.styles";
import Link from "next/link";

const MainNav = ({ children }: Props) => {
  return (
    <Styled.Nav className="a-bg-brand100">
      <Styled.Inner>
        <Link href="/" passHref>
          <a className="t-label-md">Institution Name</a>
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

export default MainNav;
