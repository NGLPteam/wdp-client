import React from "react";
import * as Icons from "../../svgs/icons";

export const ICON_MAP = {
  alertTriangle24: Icons.AlertTriangle24,
  arrowRight: Icons.ArrowRight,
  arrowDown: Icons.ArrowDown,
  arrowLeft: Icons.ArrowLeft,
  arrowUp: Icons.ArrowUp,
  avatar32: Icons.Avatar32,
  avatar60: Icons.Avatar60,
  cc: Icons.CreativeCommons,
  chevronDown: Icons.ChevronDown,
  chevronLeft: Icons.ChevronLeft,
  chevronRight: Icons.ChevronRight,
  chevronUp: Icons.ChevronUp,
  close: Icons.Close,
  close24: Icons.Close24,
  download: Icons.Download,
  hamburger: Icons.Hamburger,
  hamburger24: Icons.Hamburger24,
  linkExternal: Icons.LinkExternal,
  openLock: Icons.OpenLock,
  search: Icons.Search,
  search32: Icons.Search32,
  user: Icons.User,
  copy: Icons.Copy,
  checkbox: Icons.Checkbox,
  orcid: Icons.ORCID,
  plus: Icons.Plus,
  minus: Icons.Minus,
  share: Icons.Share,
  email: Icons.Email,
  facebook: Icons.Facebook,
  twitter: Icons.Twitter,
  view: Icons.View,
  x: Icons.X,
};

export const ICON_KEYS = Object.keys(ICON_MAP);

export type IconKeys = keyof typeof ICON_MAP;

function IconFactory({ icon, ...props }: Props) {
  const Icon = ICON_MAP[icon];
  if (!Icon) return null;

  return <Icon {...props} />;
}

interface Props
  extends Omit<React.HTMLProps<SVGSVGElement>, "size" | "children"> {
  icon: IconKeys;
  crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
}

export default IconFactory;
