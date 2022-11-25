import React, { Component } from 'react';

export default class RefSample extends Component {
  input = React.createRef();

  handelFocuse = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
