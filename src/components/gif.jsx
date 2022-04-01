import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // console.log(this.props)
    this.props.selectFunction(this.props.id);
  }

  render() {
    return (
      <img src={`https://media1.giphy.com/media/${this.props.id}/200.gif`} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}


export default Gif;
