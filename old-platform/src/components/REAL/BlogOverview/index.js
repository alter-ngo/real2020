import React from "react";

import Widget from "components/Widget";
import { Row, Col, Button } from "antd";
import { Helmet } from "react-helmet";
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
    fetch("../manifest.json")
      .then(r => r.json())
      .then(json => {
        if (typeof json["blogs"] == "undefined")
          this.setState({ blogs: [] }, callback);
        else {
          if (this.props.mode == "preview")
            this.setState(
              {
                blogs: json["blogs"].slice(json["blogs"].length - 2)
              },
              callback
            );
          else this.setState({ blogs: json["blogs"] }, callback);
        }
      });
  };

  populatePreview = () => {
    if (this.state.blogs.length != 0) {
      this.state.blogs.forEach((blog, index) => {
        if (blog.slug != this.props.exclude) {
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
        }
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

  render() {
    var sizes = [12, 12, 12, 24];
    if (this.props.embedded == true) {
      sizes[0] = 24;
      sizes[1] = 24;
      sizes[2] = 24;
      sizes[3] = 24;
    }
    return (
      <Row gutter={16}>
        {this.state.preview.map((blog, index) => {
          if (this.state.blogs.length > 0)
            return (
              <Col
                key={index}
                xl={sizes[0]}
                md={sizes[1]}
                sm={sizes[2]}
                xs={sizes[3]}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <Widget cover={<img src={blog.image} />}>
                    <h1 style={{ margin: 0 }}>
                      {blog.title.replace(/(([^\s]+\s\s*){7})(.*)/, "$1…")}
                    </h1>
                    <span>
                      <i>
                        {blog.category} - {blog.date}
                      </i>
                    </span>
                    <p style={{ fontSize: "1.15em", color: "black" }}>
                      {blog.excerpt.substring(0, 150) + " ..."}
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
