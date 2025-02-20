import classNames from "classnames";
import { useTranslation } from "react-i18next";
import BaseDropdown from "@/components/atomic/Dropdown";
import Button from "@/components/atomic/Button";
import NavMenuLink from "@/components/atomic/links/NavMenuLink";
import styles from "./Dropdown.module.css";

export default function Dropdown<T>({
  items,
  getItemProps,
  label,
  className,
  disclosureClassName,
  disclosureComponent,
}: {
  items: readonly T[];
  getItemProps: (item: T) => { href: string; label: string };
  label: string;
  className?: string;
  disclosureComponent?: "Button" | "NavMenuLink";
  disclosureClassName?: string;
}) {
  const { t } = useTranslation();

  const DisclosureComponent =
    disclosureComponent === "NavMenuLink" ? NavMenuLink : Button;

  const disclosureProps =
    disclosureComponent === "NavMenuLink"
      ? { className: disclosureClassName }
      : {
          secondary: true as const,
          size: "sm" as const,
          className: styles.disclosure,
        };

  const disclosure = (
    <DisclosureComponent as="div" icon="chevronDown" {...disclosureProps}>
      {t(label)}
    </DisclosureComponent>
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
