import { Slider, Icon } from 'antd';
import React from "react";
import './icon-wrapper.css';
class IconSlider extends React.Component {
  state = {
      value: this.props.value,
  };

  render() {
    const { max, min } = this.props;
    const {value}=this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(250, 140, 21, 1)';
    const nextColor = value >= mid ? 'rgba(250, 140, 21, 1)' : '';
    return (
      <div className="icon-wrapper">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider {...this.props} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    );
  }
}


export default IconSlider;
