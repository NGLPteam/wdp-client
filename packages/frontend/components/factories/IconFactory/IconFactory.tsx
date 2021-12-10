import React from "react";
import * as Icons from "../../svgs/icons";

export const ICON_MAP = {
  arrowRight: Icons.ArrowRight,
  arrowDown: Icons.ArrowDown,
  arrowLeft: Icons.ArrowLeft,
  arrowUp: Icons.ArrowUp,
  search: Icons.Search,
  search32: Icons.Search32,
  close: Icons.Close,
  avatarLarge: Icons.AvatarLarge,
  chevronDown: Icons.ChevronDown,
  chevronLeft: Icons.ChevronLeft,
  chevronRight: Icons.ChevronRight,
  chevronUp: Icons.ChevronUp,
  download: Icons.Download,
};

export const ICON_KEYS = Object.keys(ICON_MAP);

export type IconKeys = keyof typeof ICON_MAP;

function IconFactory({ icon, ...props }: Props) {
  const Icon = ICON_MAP[icon];
  if (!Icon) return null;

  return <Icon {...props} />;
}

interface Props extends Omit<React.HTMLProps<SVGSVGElement>, "size"> {
  icon: IconKeys;
  crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
}

export default IconFactory;
