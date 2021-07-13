import React from "react";
import { useSetActiveEntity } from "hooks/useRouterContext";
import Link from "next/link";

export default function Home() {
  useSetActiveEntity();

  return <div>WDP Admin Homepage</div>;
}
