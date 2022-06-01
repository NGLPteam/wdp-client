import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import * as Styled from "./SkipLink.styles";
import { Alert } from "components/atomic";

interface Props {
  toId: string;
  label?: string;
  message?: string;
}

export default function SkipLink({ toId, label, message }: Props) {
  const [hasSkipped, setSkipped] = useState(false);
  const { push } = useRouter();
  const { t } = useTranslation();
  const href = `#${toId}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSkipped(true);
    push(href);
  };

  return (
    <>
      <Styled.SkipLink href={href} onClick={handleClick}>
        <Alert
          message={label ?? t("nav.skip_to_content_label")}
          color="blue"
          badge
        />
      </Styled.SkipLink>
      {hasSkipped && (
        <Styled.SRText role="alert">
          {message ?? t("nav.skip_to_content_message")}
        </Styled.SRText>
      )}
    </>
  );
}
