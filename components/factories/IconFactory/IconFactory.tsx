import * as Icons from "components/svgs/icons";

const ICON_MAP = {
  arrow: Icons.Arrow,
  chevron: Icons.Chevron,
  close: Icons.Close,
  ellipses: Icons.Ellipses,
  plus: Icons.Plus,
  search: Icons.Search,
  delete: Icons.Delete,
  edit: Icons.Edit,
  checkbox: Icons.Checkbox,
  warning: Icons.Warning,
  empty: Icons.Empty,
};

export const ICON_KEYS = Object.keys(ICON_MAP);

const SIZE_MAP = {
  sm: 16,
  md: 24,
  lg: 32,
  xlg: 48,
};

export const SIZE_KEYS = Object.keys(SIZE_MAP);

function IconFactory({ icon, size, rotate, ...props }: Props) {
  const Icon = ICON_MAP[icon];
  if (!Icon) return null;

  const width = SIZE_MAP[size] || 16;
  const height = SIZE_MAP[size] || 16;
  const style = rotate
    ? {
        transform: `rotate(${rotate}deg)`,
      }
    : null;

  return <Icon width={width} height={height} style={style} {...props} />;
}

interface Props extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {
  icon: string;
  size?: "sm" | "md" | "lg" | "xlg";
  rotate?: number;
}

export default IconFactory;
