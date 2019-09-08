import React from "react";

import Widget from "components/Widget";
import { Row, Col, Button } from "antd";
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
      category: ""
    };
  }

  readManifestFile = () => {
    fetch("../manifest.json")
      .then(r => r.json())
      .then(json => {
        json = json["blogs"];
        json.forEach(blog => {
          if (blog.slug == this.props.match.params.slug)
            this.setState(
              {
                markdown: blog.markdownSrc,
                title: blog.title,
                date: blog.creationDate,
                category: blog.category
              },
              this.readMarkdownFile
            );
        });
      });
  };

  readMarkdownFile = () => {
    fetch(this.state.markdown).then(r =>
      this.setState({ content: r }, console.log(this.state))
    );
  };

  componentDidMount() {
    this.readManifestFile();
  }

  componentDidUpdate(newProps) {
      if(newProps.match.params.slug!=this.props.match.params.slug)
        window.location.reload();
  }

  render() {
    const ReactMarkdown = require("react-markdown/with-html");
    return (
      <Widget>
        <Row gutter={16}>
          <Col span={18}>
            <h1>{this.state.title}</h1>
            <p>
              {this.state.category} - {this.state.date}
            </p>
            <ReactMarkdown
              source={this.state.content}
              escapeHtml={false}
            ></ReactMarkdown>
          </Col>
          <Col span={6}>
            <h2>Articole Recomandate</h2>
            <BlogOverview
              exclude={this.props.match.params.slug}
              mode={"preview"}
              embedded={true}
            ></BlogOverview>
          </Col>
        </Row>
      </Widget>
    );
  }
}
export default BlogPost;
