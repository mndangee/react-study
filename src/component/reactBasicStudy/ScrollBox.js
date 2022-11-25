import React, { Component } from 'react';

export default class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid #000',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(#edbfbf, #eb6060)',
    };

    return (
      <div style={style} ref={ref => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}
