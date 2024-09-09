import { ContentHeader } from "components/layout";
import { IconFactory } from "components/factories";
import useFormErrors from "hooks/useFormErrors";
import Errors from "components/forms/Errors";
import { useMemo } from "react";
import * as Styled from "./GlobalErrors.styles";

export default function GlobalErrors({ globalErrors, hideHeader }: Props) {
  const errors = useFormErrors();

  const hasErrors = useMemo(
    () => !!errors.root && globalErrors.length > 0,
    [globalErrors, errors],
  );

  if (!hasErrors) {
    return null;
  }

  return (
    <Styled.Wrapper>
      {!hideHeader && (
        <ContentHeader headerStyle="secondary" title="Something went wrong" />
      )}
      {globalErrors.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <Errors name="root" />
    </Styled.Wrapper>
  );
}

interface Props {
  globalErrors: readonly string[];
  hideHeader?: boolean;
}

export function Message({ message }: MessageProps) {
  return (
    <Styled.Error>
      <IconFactory icon="warning" title="Error" />
      <p>{message}</p>
    </Styled.Error>
  );
}

interface MessageProps {
  message: string;
}
