import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./StatBlock.module.css";

type Props = {
  stat: string | number;
  label: string;
  headingLevel?: 1 | 3;
};

export default function StatBlock({ stat, label, headingLevel = 1 }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.outer}>
      <span className={styles.label}>{t(label)}</span>
      <span
        className={classNames(styles.stat, {
          [styles["stat--lg"]]: headingLevel === 1,
          [styles["stat--sm"]]: headingLevel === 3,
        })}
      >
        {stat}
      </span>
    </div>
  );
}
