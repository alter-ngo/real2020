import React, {Component} from "react";
import {Avatar, Button, Card, Divider, Icon, Input, Modal, Upload} from "antd";

const {TextArea} = Input;

class WriteBox extends Component {

  state = {
    commentText: '',
    previewVisible: false,
    previewImage: '',
    fileList: [],
    isOpen: false,
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    console.log("previewImage", file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({fileList}) => {
    console.log("fileList", fileList)
    this.setState({fileList})
  }

  handleClickImage() {
    this.setState((previousState) => ({
      isOpen: !previousState.isOpen
    }));
  }

  handleAddPost() {
    this.props.addPost(this.state.commentText, this.state.fileList);
    this.setState({
      commentText: '',
      previewVisible: false,
      previewImage: '',
      fileList: [],
      isOpen: false,
    });
  }

  onChange(e) {
    this.setState({commentText: e.target.value})
  }

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    const isEnabled = this.state.fileList.length === 0 && this.state.commentText === "";
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <Card className="gx-card">
        <div className="gx-media gx-mb-2">
          <Avatar className="gx-size-50 gx-mr-3" src={this.props.user.image}/>
          <div className="gx-media-body">
          <TextArea className="gx-border-0"
                    id="exampleTextarea"
                    value={this.state.commentText}
                    multiline="true"
                    rows={4}
                    onChange={(event) => this.onChange(event)}
                    placeholder="Whats in your mind?"
                    margin="none"/>
          </div>
        </div>

        <div className="gx-clearfix">
          {this.state.isOpen === true ? <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload> : null}

          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{width: '100%'}} src={previewImage}/>
          </Modal>
        </div>
        <Divider/>

        <div className="ant-row-flex">
          <div className="gx-pointer" onClick={this.handleClickImage.bind(this)}>
            <i className="icon icon-camera gx-mr-2 gx-fs-xl gx-d-inline-flex gx-vertical-align-middle"/>
            <span className="gx-fs-sm"> Add Photos/Album </span>
          </div>

          <Button type="primary" size='small' className="gx-ml-auto gx-mb-0"
                  disabled={(isEnabled) ? "disabled" : ""}
                  onClick={this.handleAddPost.bind(this)}>SEND
          </Button>
        </div>
      </Card>
    )
  }
}

export default WriteBox;
