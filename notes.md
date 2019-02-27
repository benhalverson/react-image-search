- uncontrolled form element

```
import React, { Component } from 'react';

class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input type="text" className="field" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

- prefer controlled elements

```
import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input
            type="text"
            className="field"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## Flow

- User types in input
- Callback gets invoked
- We call setState with the new value
- Component rerenders
- Input is told what its value is (coming from state)

### Props

- Props go down
