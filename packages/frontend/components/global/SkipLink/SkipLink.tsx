import { useTranslation } from "react-i18next";
import { Alert } from "components/atomic";
import * as Styled from "./SkipLink.styles";

interface Props {
  toId: string;
  label?: string;
}

export default function SkipLink({ toId, label }: Props) {
  const { t } = useTranslation();
  const href = `#${toId}`;

  return (
    <Styled.SkipLink href={href}>
      <Alert message={label ?? t("nav.skip_to_content")} color="blue" badge />
    </Styled.SkipLink>
  );
}
