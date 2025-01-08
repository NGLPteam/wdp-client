import { forwardRef, Ref } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Checkbox.module.css";

function Checkbox(
  { label, defaultChecked, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const { t } = useTranslation();

  return (
    <label
      className={styles.label}
      aria-label={props["aria-label"] || undefined}
    >
      <input
        className="a-hidden"
        type="checkbox"
        ref={ref}
        defaultChecked={defaultChecked}
        {...props}
      />
      <IconFactory
        className={styles.icon}
        icon="checkbox"
        role="presentation"
      />
      <span className={classNames(styles["label__text"], "t-copy-sm")}>
        {t(label)}
      </span>
    </label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.JSX.Element | string;
  label: string;
}

export default forwardRef(Checkbox);
