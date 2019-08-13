import React, {Component} from "react";
import {Avatar, Card} from "antd";

import CommentBox from "./CommentBox";
import MediaList from "./MediaList";
import DisplayDate from "../DisplayDate/index";


class PostItem extends Component {

  state = {
    message: '',
    user: {},
    post: {
      id: 0,
      text: '',
      user: {},
      date: '',
      mediaList: [],
      viewCount: 0,
      likeCount: 0,
      isLike: false,
      commentList: []
    },
  }
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log("user --->", this.state.user)
      const commentData = {
        user: this.state.user,
        comment: this.state.message,
        date: new Date().toString(),
        likeCount: 0,
        isLike: true,
        commentList: []
      }

      let commentArray = this.state.post.commentList;
      commentArray.push(commentData);
      this.setState((previousState) => ({
        post: {
          ...previousState.post,
          commentList: commentArray
        }, message: ''
      }));
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({post: this.props.postData, user: this.props.user})
  }

  updateCommentValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  handleLikeToggle() {
    this.setState((previousState) => ({
      post: {
        ...previousState.post,
        isLike: !previousState.post.isLike,
        likeCount: (previousState.post.isLike === true ? previousState.post.likeCount - 1 : previousState.post.likeCount + 1)
      }
    }));
  }

  render() {
    const {user, date, mediaList, viewCount, likeCount, isLike, commentList, text} = this.state.post;
    return (
      <Card className="gx-card">
        <div className="gx-wall-content">
          <div className="gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center">
            <Avatar className="gx-mr-3 gx-mb-2 gx-size-50" src={user.image}/>
            <div className="gx-media-body">
              <h5 className="gx-wall-user-title">{user.name}</h5>
              <DisplayDate date={date}/>
            </div>
          </div>
          <p>{text}</p>
          <div className="gx-wall-medialist">
            {mediaList.length > 0 ? <MediaList mediaList={mediaList}/> : null}
          </div>
          <div className="gx-flex-row gx-mb-2 gx-mb-xl-3">
            <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
              <i className="icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"/>
              <span
                className="gx-d-inline-flex gx-vertical-align-middle">{viewCount > 0 ? viewCount + ' Views' : 'Views'}</span>
            </p>
            <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey" onClick={this.handleLikeToggle.bind(this)}>
              {isLike === true ?
                <i className="icon icon-like gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"
                   style={{color: 'blue'}}/> :
                <i className="icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"/>}
              <span
                className="gx-d-inline-flex gx-vertical-align-middle">{likeCount > 0 ? likeCount + ' Likes' : 'Likes'}</span>

            </p>
            <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
              <i className="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"/>
              <span
                className="gx-d-inline-flex gx-vertical-align-middle">{commentList.length > 0 ? commentList.length + ' Comments' : 'Comments'}</span>
            </p>
          </div>

          <div className="gx-wall-comment-box">
            {commentList.map((commentData, index) => <CommentBox key={index} index={index} commentData={commentData}/>)}
          </div>
          <div className="gx-wall-comment-box">
            <div className="gx-media gx-mb-2">
              <Avatar className="gx-mr-3 gx-size-36" src={user.image}/>
              <div className="gx-media-body">
                <textarea
                  id="required" className="gx-border-0 ant-input"
                  onChange={(event) => this.updateCommentValue(event)}
                  onKeyPress={(event) => this._handleKeyPress(event)}
                  value={this.state.message}
                  placeholder="Type Comments"
                />
              </div>
            </div>
          </div>

        </div>
      </Card>
    )
  }
}

export default PostItem;
