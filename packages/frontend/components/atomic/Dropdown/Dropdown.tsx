import classNames from "classnames";
import BaseDropdown from "@/components/atomic/BaseDropdown";
import DropdownLink from "./DropdownLink";
import styles from "./Dropdown.module.css";

type BaseProps = React.ComponentProps<typeof BaseDropdown>;

/**
 * A dropdown for navigation submenus.
 */
const Dropdown = ({
  disclosure,
  menuItems,
  label,
  ...dropdownProps
}: Props) => {
  return (
    <BaseDropdown label={label} disclosure={disclosure} {...dropdownProps}>
      <div className={classNames("a-bg-neutral00", styles.wrapper)}>
        <ul className={styles.list}>
          {menuItems.map((item, i) => {
            if (item === null) return null;
            return (
              <li className={styles.item} key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </BaseDropdown>
  );
};

interface Props extends Omit<BaseProps, "children"> {
  menuItems: (React.ReactNode | null)[];
}

Dropdown.Link = DropdownLink;
export default Dropdown;
