import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./BaseContributionsBlock.module.css";

const BaseContributionsBlock = ({
  children,
  background = "custom10",
  header,
}: Props) => {
  const { t } = useTranslation();

  return (
    <section className={`a-bg-${background}`} id="contributors">
      <div className={classNames("l-container-wide", styles.inner)}>
        <h3 className="t-capitalize">
          {t(header || "glossary.contributor_other")}
        </h3>
        <ul className={styles.list}>{children}</ul>
      </div>
    </section>
  );
};

interface Props {
  children?: React.ReactNode;
  /** Block background color */
  background?: string;
  /** Header, default is Contributors */
  header?: string;
}

export default BaseContributionsBlock;
