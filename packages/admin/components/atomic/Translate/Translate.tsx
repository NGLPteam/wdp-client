// react-i18next extends i18next's functionality
// params in this context are values passed into the translation key
// For docs on pluralization, see: https://www.i18next.com/translation-function/plurals
// USAGE:
/* <T i18nKey="userMessagesUnread" count={count}>
  Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</T> */
// HERE IS WHAT THE en.json looks like
// "userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",
// "userMessagesUnread_plural": "Hello <1>{{name}}</1>, you have {{count}} unread messages.  <5>Go to messages</5>.",
// SEE: https://react.i18next.com/legacy-v9/trans-component

import { Trans, useTranslation } from "react-i18next";

const T = ({ children, count = 1, i18nKey }: Props) => {
  const { t } = useTranslation();

  return children ? (
    <Trans i18nKey={i18nKey} count={count}>
      {children}
    </Trans>
  ) : (
    t(i18nKey)
  );
};

interface Props {
  children?: React.ReactNode;
  count: number;
  i18nKey: string | string[];
}

export default T;
