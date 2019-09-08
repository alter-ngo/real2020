import React from "react";

import Widget from "components/Widget";
import { Row, Col, Button } from "antd";
import BlogPost from "components/REAL/BlogPost";
import { Route, Link } from "react-router-dom";

class BlogOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      preview: []
    };
  }

  readManifestFile = callback => {
    fetch("manifest.json")
      .then(r => r.json())
      .then(json => {
        json = json["blogs"];
        if (this.props.mode == "preview")
          this.setState(
            { blogs: json.slice(json.length - 2, json.length) },
            callback
          );
        else this.setState({ blogs: json }, callback);
      });
  };

  populatePreview = () => {
    if (this.state.blogs.length > 0) {
      this.state.blogs.forEach((blog, index) => {
        let dataEntry = {
          title: blog.title,
          excerpt: blog.excerpt,
          category: blog.category,
          date: blog.creationDate,
          image: blog.imageSrc,
          slug: blog.slug
        };
        this.setState(prevState => ({
          preview: [...prevState.preview, dataEntry]
        }));
      });
    } else {
      this.setState({
        preview: [{ title: "Nu a fost gasit niciun blog post." }]
      });
    }
  };

  componentDidMount() {
    this.readManifestFile(this.populatePreview);
  }

  selectRouting = () => {};

  render() {
    return (
      <Row gutter={16}>
        {this.state.preview.map((blog, index) => {
          if (this.state.preview.length > 0)
            return (
              <Col key={index} xl={12} md={12} sm={12} xs={24}>
                <Link to={`/blog/${blog.slug}`}>
                  <Widget cover={<img src={blog.image} />}>
                    <h1 style={{ margin: 0 }}>{blog.title}</h1>
                    <span>
                      <i>
                        {blog.category} - {blog.date}
                      </i>
                    </span>
                    <p style={{ fontSize: "1.15em", color: "black" }}>
                      {blog.excerpt.replace(/(([^\s]+\s\s*){30})(.*)/, "$1…")}
                    </p>
                  </Widget>
                </Link>
              </Col>
            );
          else
            return (
              <Col key={index} span={24}>
                <Widget>
                  <h1 style={{ textAlign: "center", margin: 0 }}>
                    {blog.title}
                  </h1>
                </Widget>
              </Col>
            );
        })}
      </Row>
    );
  }
}

export default BlogOverview;
