import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./Switch.module.css";

type Props = {
  options: { label: string; value: string }[];
  onClick: (val: string) => void;
  active: string;
};

export default function Switch({ options, active, onClick }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option.value}
          className={classNames(styles.button, {
            [styles["button--active"]]: option.value === active,
          })}
          disabled={option.value === active}
          aria-disabled={option.value === active}
          tabIndex={option.value === active ? -1 : 0}
          onClick={() => onClick(option.value)}
        >
          {t(option.label)}
        </button>
      ))}
    </div>
  );
}
