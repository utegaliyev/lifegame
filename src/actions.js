export const INIT_CELLS = 'INIT_CELLS'
export const ITERATE_CELLS = 'ITERATE_CELLS'
export const START_ITERATE = 'START_ITERATE'
export const STOP_ITERATE = 'STOP_ITERATE'
export const SET_INTERVAL_ID = 'SET_INTERVAL_ID'
export const CLEAR_BOARD = 'CLEAR_BOARD'

export function initCells() {
    return {type: INIT_CELLS}
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
  debugger;
  return {type: SET_INTERVAL_ID, intervalId}
}
export function clearBoard(){
  return {type: CLEAR_BOARD}
}
