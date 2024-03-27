import { useTranslation } from "react-i18next";
import * as Styled from "./BaseContributionsBlock.styles";

const BaseContributionsBlock = ({
  children,
  background = "custom10",
  header,
  paddingBottom = "md",
}: Props) => {
  const { t } = useTranslation();

  return (
    <section className={`a-bg-${background}`} id="contributors">
      <Styled.SectionInner
        className="l-container-wide"
        $paddingBottom={paddingBottom}
      >
        <h3 className="t-capitalize">
          {t(header || "glossary.contributor_other")}
        </h3>
        <Styled.List>{children}</Styled.List>
      </Styled.SectionInner>
    </section>
  );
};

interface Props {
  children?: React.ReactNode;
  /** Block background color */
  background?: string;
  /** Header, default is Contributors */
  header?: string;
  /** Optional padding bottom */
  paddingBottom?: "md" | "xxl";
}

export default BaseContributionsBlock;
