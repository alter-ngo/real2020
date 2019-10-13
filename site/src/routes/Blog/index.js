import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import IntlMessages from "util/IntlMessages";
import BlogOverview from "../../components/REAL/BlogOverview";
import BlogPost from "../../components/REAL/BlogPost";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>#estereal - Blog</title>
        <meta name="description" content="Postarile echipei REAL."></meta>
        <meta property="og:url" content={window.location.href}></meta>
        <meta property="og:title" content="Blog"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content="loader.png"></meta>
        <meta
          property="og:description"
          content="Postarile echipei REAL."
        ></meta>
      </Helmet>
      <div>
        <h2 className="title gx-mb-4">
          <IntlMessages id="Blog" />
        </h2>

        <div className="gx-d-flex justify-content-center">
          <BlogOverview></BlogOverview>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
