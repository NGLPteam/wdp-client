import { useState, useEffect } from "react";
import { Router } from "next/router";
import { ProgressBar } from "components/atomic";

export default function AppProgressBar() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, []);

  return <ProgressBar loading={isLoading} />;
}
