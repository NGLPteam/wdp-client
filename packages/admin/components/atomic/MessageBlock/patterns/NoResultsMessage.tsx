import { useTranslation } from "react-i18next";
import MessageBlock from "../MessageBlock";
type Props = React.ComponentProps<typeof MessageBlock>;

/**
 * A pattern of MessageBlock with a default name and icon
 */
function NoResultsMessage({
  name = "lists.no_results",
  ...props
}: Partial<Props>) {
  const { t } = useTranslation();

  return <MessageBlock name={t(name)} type="empty" {...props} />;
}

export default NoResultsMessage;
