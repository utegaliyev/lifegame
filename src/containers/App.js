import React, { Component } from "react";
import Board from '../components/Board/Board';
import {initCells, iterate, startIterate, stopIterate, setIntervalId, clearBoard} from '../actions';
import { connect } from 'react-redux'
import {ButtonGroup, Button, Panel, Col} from 'react-bootstrap';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    if(this.props.start != nextProps.start){
      if(nextProps.start){
        const intervalId = setInterval(nextProps.iterate,2000);
        nextProps.setIntervalId(intervalId);
      }else{
          clearInterval(nextProps.intervalId);
      }
    }
  }
  render(){
    return (
      <Col xs={12} md={4} mdOffset={2} lg={4} lgOffset={4}>
      <Panel header="Game of Life">
        <Board boardCells={this.props.boardCells}/>
          <ButtonGroup>
            <Button  bsStyle="info" onClick={this.props.iterate}>Next</Button>
            <Button bsStyle="primary" onClick={this.props.initCells}>Setup</Button>
            <Button bsStyle="success" onClick={this.props.startIterate}>Start</Button>
            <Button bsStyle="warning" onClick={this.props.stopIterate}>Stop</Button>
            <Button bsStyle="danger" onClick={this.props.clearBoard}>Clear</Button>
          </ButtonGroup>
          <span>{this.props.counter}</span>
      </Panel>
    </Col>
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
      clearBoard: () => {dispatch(clearBoard())},
    }
}
export default connect(mapStateToProps, mapDispachToProps)(App);
