import * as Icons from "components/svgs/icons";

const ICON_MAP = {
  search: Icons.Search,
};

const SIZE_MAP = {
  sm: 16,
  md: 24,
  lg: 32,
};

function IconFactory({ icon, size, ...props }: Props) {
  const Icon = ICON_MAP[icon];
  const width = SIZE_MAP[size] || 16;
  const height = SIZE_MAP[size] || 16;
  if (!Icon) return null;
  return <Icon width={width} height={height} {...props} />;
}

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon: string;
  size?: number;
}

export default IconFactory;
