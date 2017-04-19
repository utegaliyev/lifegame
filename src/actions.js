export const INIT_CELLS = 'INIT_CELLS'
export const ITERATE_CELLS = 'ITERATE_CELLS'
export const START_ITERATE = 'START_ITERATE'
export const STOP_ITERATE = 'STOP_ITERATE'
export const SET_INTERVAL_ID = 'SET_INTERVAL_ID'

function getCells(row, col){
    const result = [];
    for(var i=0; i<row; i++){
      result.push([]);
      for(var j=0; j<col; j++){
        result[i].push(getRandomCell());
      }
    }
    return result;
}

function getRandomCell(){
    const rand = parseInt( Math.random() * 5 + 1);
    //debugger;
    if(rand==1){
      return {alive: true};
    }else{
      return {alive: false};
    }
}

function getNextCells(){

}

export function initCells(row, col) {
    return {
        type: INIT_CELLS,
        boardCells: getCells(row, col)
    }
}

export function iterate(){
  return {type: ITERATE_CELLS}
}
export function startIterate(){
  return {type: START_ITERATE}
}
export function stopIterate(){
  return {type: STOP_ITERATE}
}
export function setIntervalId(intervalId){
  return {type: STOP_ITERATE, intervalId}
}
