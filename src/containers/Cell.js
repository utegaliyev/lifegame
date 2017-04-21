import Cell from '../components/Cell/Cell.js';
import {connect} from 'react-redux';
import {cellClick} from '../actions';

const mapDispachToProps2 = (dispatch)=> {
    return {
      onCellClick: (row, col)=> {dispatch(cellClick(row, col))}
    }
}
export default connect(null, mapDispachToProps2)(Cell);
