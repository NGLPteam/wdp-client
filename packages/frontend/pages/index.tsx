import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return <h1>{t("common.welcome_to", { name: "this instance" })}</h1>;
}
