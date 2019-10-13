import React from "react";
import { Route, Switch } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BlogOverview from "../../components/REAL/BlogOverview";
import BlogPost from "../../components/REAL/BlogPost";

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
