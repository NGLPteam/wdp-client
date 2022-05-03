import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  role?: string;
  title?: string;
  width?: number | string;
  height?: number | string;
}

export default IconProps;
