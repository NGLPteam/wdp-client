import { type ComponentProps, forwardRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import { MaybeLinkRef } from "@castiron/common-types";
import { IconFactory } from "components/factories";
import styles from "./NavMenuLink.module.css";

type IconProps = ComponentProps<typeof IconFactory>;

function NavMenuLink(
  {
    children,
    as,
    className,
    icon,
    ...props
  }: Props & (LinkProps | ButtonProps),
  ref: MaybeLinkRef,
) {
  if ("href" in props) {
    const Tag = as ?? "span";

    return as ? (
      <Tag className={classNames(styles.link, className)}>
        <span>{children}</span>
        {icon && <IconFactory icon={icon} />}
      </Tag>
    ) : props.href ? (
      <Link
        prefetch={false}
        className={classNames(styles.link, className)}
        ref={ref}
        {...props}
        href={props.href}
      >
        <span>{children}</span>
        {icon && <IconFactory icon={icon} />}
      </Link>
    ) : null;
  }

  if ("onClick" in props) {
    return (
      <button className={classNames(styles.link, className)} {...props}>
        <span>{children}</span>
        {icon && <IconFactory icon={icon} />}
      </button>
    );
  }
}

export default forwardRef(NavMenuLink);

interface Props {
  children: React.ReactNode;
  className?: string;
  icon?: IconProps["icon"];
}

type LinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "as" | "onClick"
> & {
  href?: string | null;
  as?: "span" | "div";
};

type ButtonProps = Omit<ComponentProps<"button">, "href"> & {
  as: "button";
};
