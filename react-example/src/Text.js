import React, {Component} from 'react';
import './App.css';

class Text extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <p onClick={() => alert('click')}>Texto! {this.props.value}</p>
    );
  }
}

export default Text;
