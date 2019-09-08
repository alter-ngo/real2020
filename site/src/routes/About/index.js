import React from "react";
import { renderComponent } from "recompose";
import textSource from "pages/despre.md";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(textSource)
      .then(response => response.text())
      .then(data => {
        this.setState({ text: data, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const ReactMarkdown = require("react-markdown/with-html");
    const TextDescription = this.state.text;
    const isLoading = this.state.isLoading;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return <ReactMarkdown source={TextDescription} escapeHtml={false} />;
  }
}

export default AboutPage;
