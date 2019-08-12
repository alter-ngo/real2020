import React, {Component} from "react";

class GridImage extends Component {

  handleCancel() {
    this.props.handleToggle();
  }

  render() {
    const {mediaList} = this.props;
    switch (mediaList.length) {
      case 1:
        return <div className="gx-gallery-item" onClick={this.handleCancel.bind(this)}>
          <img className="gx-img-fluid" src={mediaList[0].image} alt="post"/>
        </div>
      case 2:
        return <div className="gx-gallery-grid gx-gallery-2" onClick={this.handleCancel.bind(this)}>
          <div className="gx-gallery-item">
            <img className="gx-img-fluid" src={mediaList[0].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img className="gx-img-fluid" src={mediaList[1].image} alt="post"/>
          </div>
        </div>
      case 3:
        return <div className="gx-gallery-grid gx-gallery-3" onClick={this.handleCancel.bind(this)}>
          <div className="gx-gallery-item">
            <img className="gx-img-fluid" src={mediaList[0].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img className="gx-img-fluid" src={mediaList[1].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img className="gx-img-fluid" src={mediaList[2].image} alt="post"/>
          </div>
        </div>
      case 4:
        return <div className="gx-gallery-grid gx-gallery-4" onClick={this.handleCancel.bind(this)}>
          <div className="gx-gallery-item">
            <img src={mediaList[0].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img src={mediaList[1].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img src={mediaList[2].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img src={mediaList[3].image} alt="post"/>
          </div>
        </div>
      default:
        return <div className="gx-gallery-grid gx-gallery-4-more" onClick={this.handleCancel.bind(this)}>
          <div className="gx-gallery-item">
            <img src={mediaList[0].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img src={mediaList[1].image} alt="post"/>
          </div>
          <div className="gx-gallery-item thumb">
            <img src={mediaList[2].image} alt="post"/>
          </div>
          <div className="gx-gallery-item">
            <img src={mediaList[3].image} alt="post"/>
            <div className="gx-gallery-item-content">
              <h1 className="gx-text-white">+ {mediaList.length - 3}</h1>
            </div>
          </div>
        </div>
    }
  }
}

export default GridImage;
