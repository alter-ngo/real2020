import antdRo from "antd/lib/locale-provider/en_GB";
import appLocaleData from "react-intl/locale-data/ro";
import roMessages from "../locales/ro_RO.json";

const RoLang = {
  messages: {
    ...roMessages
  },
  antd: antdRo,
  locale: 'ro-RO',
  data: appLocaleData
};
export default RoLang;
