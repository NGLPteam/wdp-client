import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function UserLayout({ children }: Props) {
  return <>{children}</>;
}
