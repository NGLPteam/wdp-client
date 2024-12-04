import { ComponentProps } from "react";
import { useTranslation } from "react-i18next";
import Button from "..";
type Props = ComponentProps<typeof Button>;

export default function BackToTopButton(
  props: Omit<Props, "icon" | "hideLabelOnMobile">,
) {
  const { t } = useTranslation();

  return (
    <Button secondary icon="arrowUp" hideLabelOnMobile {...props}>
      {t("common.back_to_top")}
    </Button>
  );
}
