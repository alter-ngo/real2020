import React from "react";

import IntlMessages from "util/IntlMessages";

const AboutPage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="Despre"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4><IntlMessages id="app.announced"/></h4>
      </div>

    </div>
  );
};

export default AboutPage;
