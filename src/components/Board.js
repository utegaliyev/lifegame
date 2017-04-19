import React, {PropTypes} from 'react';
import Row from './Row/Row';

const Board = ({boardCells}) => {

  return (
      <div className="board">
        {boardCells.map((rowCells, index) =>
              <Row cells={rowCells} key={index}/>
         )}
      </div>
  );
};

/*
Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({

  }));
};
*/
export default Board;
