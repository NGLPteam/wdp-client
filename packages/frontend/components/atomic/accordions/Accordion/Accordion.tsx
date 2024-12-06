import React from "react";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Accordion.module.css";

export default function Accordion({ label, menuItems }: Props) {
  const submenu =
    menuItems &&
    menuItems.map((item, i) => (
      <li key={i} className={styles.item}>
        {item}
      </li>
    ));

  return (
    <details>
      <summary className={styles.summary}>
        <span>{label}</span>
        <IconFactory icon="chevronDown" role="presentation" data-closed />
        <IconFactory icon="chevronUp" role="presentation" data-open />
      </summary>
      <ul className={styles.list}>{submenu}</ul>
    </details>
  );
}

type Props = {
  label: string;
  menuItems?: React.JSX.Element[];
};
