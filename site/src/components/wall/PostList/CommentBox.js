import React, {Component} from "react";
import {Avatar, Button} from "antd";

import DisplayDate from "../DisplayDate/index";

class CommentBox extends Component {

  state = {
    isComment: false,
    commentData: {
      id: 0,
      user: {},
      isLike: true,
      likeCount: 0,
      date: '',
      commentList: [],
      comment: ''
    },
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCommentToggle();
    }
  }

  componentWillMount() {
    this.setState({commentData: this.props.commentData})
  }

  handleLikeToggle() {
    this.setState((previousState) => ({
      commentData: {
        ...previousState.commentData,
        isLike: !previousState.commentData.isLike,
        likeCount: (previousState.commentData.isLike === true ? previousState.commentData.likeCount - 1 : previousState.commentData.likeCount + 1)
      }
    }));
  }

  handleCommentToggle() {
    this.setState((previousState) => ({
        isComment: !previousState.isComment,
      }
    ));
  }

  render() {
    const {user, isLike, date, comment} = this.state.commentData;
    return (
      <div className="gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3">
        <Avatar className="gx-mr-3 gx-size-40" src={user.image}/>
        <div className="gx-media-body">
          <h5 className="gx-wall-user-title">{user.name}</h5>
          <DisplayDate date={date}/>
          <p className="gx-mt-2">{comment}</p>
          <div className="gx-flex-row">
            <Button type="primary" size="small"
                    onClick={this.handleLikeToggle.bind(this)}>{isLike === true ? 'Like' : 'UnLike'}</Button>
            <Button className="gx-btn-primary-light" size="small"
                    onClick={this.handleCommentToggle.bind(this)}>Comment</Button>
          </div>
          {this.state.isComment === true ? <div className="gx-media">
            <Avatar className="gx-mr-3 gx-size-30" src={user.image}/>
            <div className="gx-media-body">
              <input
                id="required" className="gx-border-0 ant-input"
                placeholder="Type Comments"
                onKeyPress={(event) => this._handleKeyPress(event)}
              />
            </div>
          </div> : null}

        </div>
      </div>
    )
  }
}

export default CommentBox;
