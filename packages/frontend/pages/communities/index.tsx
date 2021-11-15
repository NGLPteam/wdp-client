import { useTranslation } from "react-i18next";

export default function CommunityPage() {
  const { t } = useTranslation();

  return <h1>{t("common.welcome_to", { name: "this community" })}</h1>;
}
