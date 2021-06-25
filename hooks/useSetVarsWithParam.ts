import { useRouter } from "next/router";
import { useEffect } from "react";

/*
    Right now, this is simply taking one param, but it can
    be updated or a similar one made for passing in an
    object with multiple param updates at once.
*/

export default function useSetVarsWithParam(
  param,
  val,
  valSetter,
  variablesSetter
): void {
  const router = useRouter();

  useEffect(() => {
    let newVal;
    if (typeof val === "number") {
      newVal = parseInt(router.query[param] as string) || 1;
    } else {
      newVal = router.query[param];
    }

    valSetter(newVal);
    variablesSetter((v) => ({
      ...v,
      [param]: newVal,
    }));
  }, [router.query[param]]); // eslint-disable-line
}
