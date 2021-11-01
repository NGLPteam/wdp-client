import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string | undefined;
  height?: number | string | undefined;
  fill?: string;
  role?: string;
  title?: string;
}

export default IconProps;
