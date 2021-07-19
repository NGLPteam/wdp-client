import { useTranslation } from "react-i18next";
import MessageBlock from "../MessageBlock";
type Props = React.ComponentProps<typeof MessageBlock>;

/**
 * A pattern of MessageBlock with a default name and icon
 */
function ErrorMessage({ name = "error", ...props }: Partial<Props>) {
  const { t } = useTranslation("common");

  return <MessageBlock name={t(name)} type="error" {...props} />;
}

export default ErrorMessage;
