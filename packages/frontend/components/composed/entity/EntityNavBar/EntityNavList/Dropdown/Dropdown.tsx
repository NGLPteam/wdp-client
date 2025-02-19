import classNames from "classnames";
import { useTranslation } from "react-i18next";
import BaseDropdown from "@/components/atomic/Dropdown";
import Button from "@/components/atomic/Button";
import styles from "./Dropdown.module.css";

export default function Dropdown<T>({
  items,
  getItemProps,
  label,
  className,
}: {
  items: readonly T[];
  getItemProps: (item: T) => { href: string; label: string };
  label: string;
  className?: string;
}) {
  const { t } = useTranslation();

  const disclosure = (
    <Button
      as="div"
      className={styles.disclosure}
      size="sm"
      icon="chevronDown"
      secondary
    >
      {t(label)}
    </Button>
  );

  const menuItems = items.map((item, i) => (
    <BaseDropdown.Link key={i} {...getItemProps(item)} />
  ));

  return (
    <li className={classNames("t-capitalize", className)}>
      <BaseDropdown
        label={t(label)}
        disclosure={disclosure}
        menuItems={menuItems}
      />
    </li>
  );
}
