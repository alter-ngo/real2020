import React from "react";

import IntlMessages from "util/IntlMessages";
import BlogOverview from "../../components/REAL/BlogOverview";

const BlogPage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="Blog" />
      </h2>

      <div className="gx-d-flex justify-content-center">
        <BlogOverview></BlogOverview>
      </div>
    </div>
  );
};

export default BlogPage;
