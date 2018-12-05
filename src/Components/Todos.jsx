import React from 'react';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTodos: false };
  }
  render() {
    return (
      <div>
        <button
          className="pure-button"
          onClick={() => this.setState({ showTodos: !this.state.showTodos })}
        >
          Show /hide todos
        </button>
        {
          this.state.showTodos &&
          <ul>
            <li>make title editable and base exported file names off it</li>
            <li>enhance bug tracking feature</li>
            <li>support mobile device width</li>
            <li>write unit tests</li>
            <li>refactor components</li>
            <li>import/ export excel files</li>
          </ul>
        }
      </div>
    );
  }
}

export default Todos;
