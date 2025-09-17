import { forwardRef, Ref, ComponentProps } from "react";
import { MaybeLinkRef } from "@castiron/common-types";
import { Link as NextLink } from "@/lib/vendor/react-transition-progress/link";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Link.module.css";

export type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href?: string | null;
};

type IconProps = ComponentProps<typeof IconFactory>;

/* Simple download text and icon,
 * style can be changed using the className property */
function Link(
  { children, icon, iconLeft, href, as, ...props }: Props & LinkProps,
  ref: MaybeLinkRef | Ref<HTMLAnchorElement>,
) {
  if (!children) return null;

  return href ? (
    <NextLink
      className={styles.link}
      as={as}
      ref={ref}
      href={href}
      prefetch={as ? undefined : false}
      {...props}
    >
      {icon && iconLeft && (
        <IconFactory className={styles.icon} icon={icon} role="presentation" />
      )}
      <span className={styles.linkText}>{children}</span>
      {icon && !iconLeft && (
        <IconFactory className={styles.icon} icon={icon} role="presentation" />
      )}
    </NextLink>
  ) : (
    <span {...props}>
      {icon && iconLeft && (
        <IconFactory className={styles.icon} icon={icon} role="presentation" />
      )}
      <span className={styles.linkText}>{children}</span>
      {icon && !iconLeft && (
        <IconFactory className={styles.icon} icon={icon} role="presentation" />
      )}
    </span>
  );
}

interface Props {
  icon?: IconProps["icon"];
  iconLeft?: true;
  as?: "span" | "button";
  active?: boolean;
}

export default forwardRef(Link);
