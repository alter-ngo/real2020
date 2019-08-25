import React from "react";

import Widget from "components/Widget";
import { Row, Col, Card } from "antd";

class BlogOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    // logic for getting first 3 blog posts
    // placeholder
    let blogData = [
      {
        title: "Blog 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageSrc: "https://dummyimage.com/600x400/000/fff"
      },
      {
        title: "Blog 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageSrc: "https://dummyimage.com/600x400/000/fff"
      }
    ];
    this.setState({ blogs: blogData });
  }

  render() {
    return (
        <Row gutter={16}>
          {this.state.blogs.map((blog, index) => {
            return (
              <Col key={index} xl={12} md={12} sm={12} xs={24}>
                <Widget cover={<img src={blog.imageSrc} />}>
                  <Card.Meta
                    title={blog.title}
                    description={blog.content.replace(
                      /(([^\s]+\s\s*){20})(.*)/,
                      "$1…"
                    )}
                  ></Card.Meta>
                </Widget>
              </Col>
            );
          })}
        </Row>
    );
  }
}

export default BlogOverview;
