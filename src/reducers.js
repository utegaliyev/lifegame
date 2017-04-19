import {INIT_CELLS, ITERATE_CELLS, START_ITERATE, STOP_ITERATE, SET_INTERVAL_ID} from './actions';

function getNextCells(cells){
  const result = [];
  for(let i=0; i<cells.length; i++){
    result.push([]);
    for(let j=0; j<cells[i].length; j++){
        const aliveNeightbors = [];
        if(i!=0 && j!=0 && cells[i-1][j-1] != undefined && cells[i-1][j-1].alive){
              aliveNeightbors.push(cells[i-1][j-1]);
        }
        if(i!=0 && cells[i-1][j] != undefined && cells[i-1][j].alive){
              aliveNeightbors.push(cells[i-1][j]);
        }
        if(i!=0 && j+1!=cells[i-1].length  && cells[i-1][j+1] != undefined && cells[i-1][j+1].alive){
              aliveNeightbors.push(cells[i-1][j+1]);
        }
        if(j+1!=cells[i].length && cells[i][j+1] != undefined && cells[i][j+1].alive){
              aliveNeightbors.push(cells[i][j+1]);
        }
        if(j+1!=cells[i].length && i+1!=cells.length && cells[i+1][j+1] != undefined && cells[i+1][j+1].alive){
              aliveNeightbors.push(cells[i+1][j+1]);
        }
        if(i+1!=cells.length && cells[i+1][j] != undefined && cells[i+1][j].alive){
              aliveNeightbors.push(cells[i+1][j]);
        }
        if(i+1!=cells.length && j!=0 && cells[i+1][j-1] != undefined && cells[i+1][j-1].alive){
              aliveNeightbors.push(cells[i+1][j-1]);
        }
        if(j!=0 && cells[i][j-1] != undefined && cells[i][j-1].alive){
              aliveNeightbors.push(cells[i][j-1]);
        }
        if(aliveNeightbors.length===2 ||aliveNeightbors.length===3){
            result[i].push({alive: true});
        }else{
          result[i].push({alive: false});
        }
    }
  }
  return result;
}

const cells = (state = {boardCells: [],
                        counter: 0,
                        start: false}, action) => {
    switch (action.type) {
      case INIT_CELLS:
        return Object.assign({}, state, {boardCells: action.boardCells,   counter: 0});
      case ITERATE_CELLS:
        return Object.assign({}, state, {boardCells: getNextCells(state.boardCells),   counter: state.counter+1});
      case START_ITERATE:
        return  Object.assign({}, state, {start: true});
      case STOP_ITERATE:
        return  Object.assign({}, state, {start: false});
      case SET_INTERVAL_ID:
        return Object.assign({}, state, {intervalId: action.intervalId});
      default:
        return state;
    }
}

export default cells;
