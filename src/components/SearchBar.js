import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            data-testid="search-bar"
            type="text"
            className="field"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
