import antdEn from "antd/lib/locale-provider/en_US";
import appLocaleData from "react-intl/locale-data/ro";
import enMessages from "../locales/ro_RO.json";

const EnLang = {
  messages: {
    ...enMessages
  },
  antd: antdEn,
  locale: 'ro-RO',
  data: appLocaleData
};
export default EnLang;
