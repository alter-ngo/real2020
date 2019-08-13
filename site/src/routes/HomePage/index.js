import React from "react";

import IntlMessages from "util/IntlMessages";

const HomePage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="Home Page"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Real devs wish you Happy Coding!</h4>
      </div>

    </div>
  );
};

export default HomePage;
