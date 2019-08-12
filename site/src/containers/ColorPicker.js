import React, {Component} from "react";
import {ChromePicker, SketchPicker} from "react-color";

const noop = () => {
};

const pickers = {
  chrome: ChromePicker,
  sketch: SketchPicker,
};

export default class ColorPicker extends Component {
  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    position: 'bottom',
  };
  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
  };
  handleClose = () => {
    this.setState({displayColorPicker: false});
  };
  handleChange = (color) => {
    this.setState({color: color.hex});
    this.props.onChange(color.hex, color);
  };
  handleChangeComplete = (color) => {
    this.setState({color: color.hex});
    this.props.onChangeComplete(color.hex);
  };

  constructor(props) {
    super();
    this.state = {
      displayColorPicker: false,
      color: props.color,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({color: nextProps.color});
  }

  render() {
    const {small, type, position} = this.props;

    const Picker = pickers[type];

    const styles = {
      color: {
        display: 'inline-block',
        width: small ? '16px' : '120px',
        height: small ? '16px' : '24px',
        verticalAlign: 'middle',
        marginRight: '8px',
        borderRadius: '2px',
        padding: '2px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        background: this.state.color,
      },
      swatch: {
        padding: '4px',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      wrapper: {
        position: 'inherit',
        zIndex: '100',
      },
    };

    if (position === 'top') {
      styles.wrapper.transform = 'translateY(-100%)';
      styles.wrapper.paddingBottom = 8;
    }

    const swatch = (
      <div style={styles.swatch} onClick={this.handleClick}>
        <span style={styles.color}/>
        <span>        {this.props.children}</span>
      </div>
    );
    const picker = this.state.displayColorPicker ? (
      <div style={styles.popover}>
        <div style={styles.cover} onClick={this.handleClose}/>
        <div style={styles.wrapper}>
          <Picker
            {...this.props}
            color={this.state.color}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    ) : null;

    if (position === 'top') {
      return <div>{picker}{swatch}</div>;
    }
    return <div>{swatch}{picker}</div>;
  }
}
