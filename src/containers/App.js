import React, { Component } from "react";
import Board from '../components/Board';
import {initCells, iterate, startIterate, stopIterate, setIntervalId} from '../actions';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger;
      const v_start =this.props.start;
        const intervalId = setInterval(function(){
          if(v_start){
              this.props.iterate();
          }
        },1000);
        setIntervalId(intervalId);
      }

  /*componentWillUnmount(nextProps){
    if(!this.props.start){
      clearInterval(this.props.intervalId);
    }
  }*/
    /*componentWillUnmount() {
      if(!this.props.start){
      }
   }*/
  render(){
    return (
      <div>
          <Board boardCells={this.props.boardCells}/>
          <button onClick={this.props.iterate}>Next</button>
          <button onClick={() => this.props.initCells(3, 3)}>Setup</button>
          <button onClick={this.props.startIterate}>Start</button>
          <button onClick={this.props.iterate}>Stop</button>
          <span>{this.props.counter}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const {boardCells, counter, start, intervalId} = state;
    return {boardCells, counter, start, intervalId};
}
const mapDispachToProps = (dispatch)=> {
    return {
      initCells: (row, col)=> {dispatch(initCells(row, col))},
      iterate: () => {dispatch(iterate())},
      startIterate: () => {dispatch(startIterate())},
      stopIterate: () => {dispatch(stopIterate())},
      setIntervalId:(id) => {dispatch(setIntervalId(id))},
    }
}
export default connect(mapStateToProps, mapDispachToProps)(App);
