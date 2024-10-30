import IconFactory, {
  type IconKeys,
} from "components/factories/IconFactory/IconFactory";
import { Link } from "components/atomic";

type Props = {
  label: string;
  icon?: IconKeys | null;
  url?: string | null;
  className?: string | null;
};

export default function HeroSidebarItem({
  icon,
  url,
  label,
  className,
}: Props) {
  return (
    <li
      className={`t-label-sm l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}
    >
      {!!icon && <IconFactory icon={icon} role="presentation" />}
      {url ? (
        <Link target="_blank" rel="noreferrer" href={url}>
          <span>{label}</span>
        </Link>
      ) : (
        <span>{label}</span>
      )}
    </li>
  );
}
