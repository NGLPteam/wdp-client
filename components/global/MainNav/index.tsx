import * as Styled from "./styles";

const MainNav = ({ children }: Props) => {
  return (
    <Styled.Nav>
      <Styled.Inner>
        <a className="t-label-md" href="/">
          Institution Name
        </a>
        <ul className="flex">
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
