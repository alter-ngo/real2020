import React from "react";

import Widget from "components/Widget";
import { Row, Col, Button } from "antd";

const BlogPost = match => {
    console.log(match)
    return <div>{match.match.params.slug}</div>
};

export default BlogPost;