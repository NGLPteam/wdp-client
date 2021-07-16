import React from "react";
import { useSetActiveModel } from "hooks/useRouterContext";

export default function Home() {
  useSetActiveModel();

  return <div>WDP Admin Homepage</div>;
}
