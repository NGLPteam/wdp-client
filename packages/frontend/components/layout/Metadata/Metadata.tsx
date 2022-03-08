import { useTranslation } from "react-i18next";
import * as Styled from "./Metadata.styles";

const Metadata = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const { t } = useTranslation();

  return (
    <Styled.Section className={`l-container-wide ${className || ""}`}>
      <h3>{t("layouts.metadata_header")}</h3>
      <Styled.List>{children}</Styled.List>
    </Styled.Section>
  );
};

const MetadataItem = ({
  label,
  children,
}: {
  label?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Styled.ListItem>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Text>{children || "--"}</Styled.Text>
    </Styled.ListItem>
  );
};

export default Metadata;

Metadata.Item = MetadataItem;
