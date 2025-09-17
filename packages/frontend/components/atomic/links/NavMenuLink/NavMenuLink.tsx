import { type ComponentProps, forwardRef } from "react";
import classNames from "classnames";
import { MaybeLinkRef } from "@castiron/common-types";
import { Link } from "@/lib/vendor/react-transition-progress/link";
import IconFactory from "@/components/factories/IconFactory";
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
  if (as === "span" || as === "div") {
    const Tag = as;

    return (
      <Tag className={classNames(styles.link, className)}>
        <span>{children}</span>
        {icon && <IconFactory icon={icon} />}
      </Tag>
    );
  }

  if ("href" in props) {
    return props.href ? (
      <Link
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
