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
};

export const ICON_KEYS = Object.keys(ICON_MAP);

const SIZE_MAP = {
  sm: 16,
  md: 24,
  lg: 32,
};

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

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon: string;
  size?: number;
  rotate?: number;
}

export default IconFactory;
