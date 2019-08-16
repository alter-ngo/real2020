import React from "react";
import IntlMessages from "util/IntlMessages";
import {Col, Row} from "antd";
import Objectives from "components/REAL/Objectives"
const BordPage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="Panou"/></h2> 
        <Objectives></Objectives>
    </div>
  );
};

export default BordPage;
