"use client";

import { useCallback } from "react";
import { useDropdownContext } from "../../BaseDropdown/BaseDropdown";
import { Link, NamedLink } from "../../links";

type LinkProps = React.ComponentProps<typeof Link>;

type Props = Omit<React.ComponentProps<typeof NamedLink>, "children"> &
  Pick<LinkProps, "active" | "icon" | "iconLeft"> & {
    label: string;
  };

export default function DropdownLink({
  onClick,
  label,
  icon,
  iconLeft,
  active,
  className,
  ...namedLinkProps
}: Props) {
  const dropdown = useDropdownContext();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      dropdown?.hide();
      if (onClick) onClick(e);
    },
    [dropdown, onClick],
  );

  return (
    <NamedLink {...namedLinkProps} onClick={handleClick}>
      <Link
        as="span"
        onClick={handleClick}
        active={active}
        icon={icon}
        iconLeft={iconLeft}
        className={className}
      >
        {label}
      </Link>
    </NamedLink>
  );
}
