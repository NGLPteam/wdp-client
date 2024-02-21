import { UrlObject } from "url";
import Link from "next/link";
import * as Styled from "./MessageBlock.styles";
import { Button } from "components/atomic";
import IconFactory from "components/factories/IconFactory";
declare type Url = string | UrlObject;

const MessageBlock = ({ type = "error", name, message, link }: Props) => {
  return (
    <Styled.Wrapper type={type} className="a-bg-brand10 t-align-center">
      <Styled.Inner>
        <IconFactory icon={type === "error" ? "warning" : "empty"} size="xlg" />
        <Styled.Header>{name}</Styled.Header>
        {message && (
          <Styled.Message className="t-rte">{message}</Styled.Message>
        )}
        {link && (
          <Styled.ButtonWrapper>
            <Link href={link.href} passHref legacyBehavior>
              <Button as="a">{link.label}</Button>
            </Link>
          </Styled.ButtonWrapper>
        )}
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

interface Props {
  /** Error name */
  name: string;
  /** Optional message, can be string or element */
  message?: string | JSX.Element;
  /** Optional button link. Props map to next/link props. */
  link?: {
    label: string;
    href: Url;
  };
  /** Defaults to "error" */
  type?: "error" | "empty";
}

export default MessageBlock;
