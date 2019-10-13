import React from "react";

import Widget from "components/Widget";
import { Row, Col, Button } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { string } from "prop-types";
import BlogOverview from "../BlogOverview";

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      title: "",
      content: "",
      date: "",
      category: "",
      excerpt: "",
      src: ""
    };
  }

  readManifestFile = () => {
    fetch("../manifest.json")
      .then(r => r.json())
      .then(json => {
        json = json["blogs"];
        json.forEach(blog => {
          if (blog.slug == this.props.match.params.slug)
            this.setState({
              content: blog.content,
              title: blog.title,
              date: blog.creationDate,
              category: blog.category,
              excerpt: blog.excerpt,
              src: blog.imageSrc
            });
        });
      });
  };

  componentDidMount() {
    this.readManifestFile();
  }

  componentDidUpdate(newProps) {
    if (newProps.match.params.slug != this.props.match.params.slug)
      window.location.reload();
  }

  render() {
    const ReactMarkdown = require("react-markdown/with-html");
    return (
      <HelmetProvider>
        <Helmet>
          <title>#estereal - {this.state.title}</title>
          <meta
            name="description"
            content={this.state.excerpt.substring(0, 150) + " ..."}
          ></meta>
          <meta property="og:url" content={window.location.href}></meta>
          <meta property="og:title" content={this.state.title}></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:image" content={this.state.src}></meta>
          <meta
            property="og:description"
            content={this.state.excerpt.substring(0, 150) + " ..."}
          ></meta>
        </Helmet>
        <Widget>
          <Row gutter={16}>
            <Col xl={18} md={16} sm={24} xs={24}>
              <h1>{this.state.title}</h1>
              <p>
                {this.state.category} - {this.state.date}
              </p>
              <div
                className="content"
                style={{ color: "black", fontSize: "1.2em" }}
              >
                <ReactMarkdown
                  source={this.state.content}
                  escapeHtml={false}
                ></ReactMarkdown>
              </div>
            </Col>
            <Col xl={6} md={8} sm={24} xs={24}>
              <h2>Articole Recomandate</h2>
              <BlogOverview
                exclude={this.props.match.params.slug}
                mode={"preview"}
                embedded={true}
              ></BlogOverview>
            </Col>
          </Row>
        </Widget>
      </HelmetProvider>
    );
  }
}
export default BlogPost;
