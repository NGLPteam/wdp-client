import { NamedLink } from "components/atomic";
import * as Styled from "./ImageLink.styles";

type ImageProps = React.ComponentProps<typeof NamedLink>;

export default function ImageLink({ children, ...props }: Props & ImageProps) {
  return (
    <NamedLink {...props} passHref>
      <Styled.Link className="a-link">{children}</Styled.Link>
    </NamedLink>
  );
}

interface Props {
  children?: React.ReactNode;
}
