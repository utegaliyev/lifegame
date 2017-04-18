import React, { Component } from "react";
import Board from './Board'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
/*
  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
*/
  render() {
    const { counter } = this.state;
    const cells = [ [4,5,6], [1,2,3]];
    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>
            <Board boardCells={cells}/>
        </div>
      </header>
    );
  }
}
