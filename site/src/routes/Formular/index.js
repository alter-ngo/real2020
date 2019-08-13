import React from "react";

import IntlMessages from "util/IntlMessages";

const AboutPage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="About Page"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>This is the about page of Real</h4>
      </div>

    </div>
  );
};

export default AboutPage;
