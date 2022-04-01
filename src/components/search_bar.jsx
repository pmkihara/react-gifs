import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (event) => {
    event.persist(); // Makes it possible to access the event in the timeout
    const timer = setTimeout(() => this.props.searchFunction(event.target.value), 400);
    return () => clearTimeout(timer);
  }

  handleFocus = (event) => {
    this.props.focusFunction(event.type);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleSearch} onFocus={this.handleFocus} onBlur={this.handleFocus} />
    );
  }
}

export default SearchBar;
