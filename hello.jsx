import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <div><h1>HelloOOO !!!</h1></div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
