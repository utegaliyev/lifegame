import React, {PropTypes} from 'react';
import Cell from '../Cell/Cell';
import './style.css';

const Row = ({cells}) => {

  return (
      <div className="row">
        {cells.map((cell, index) =>
            <Cell cell={cell} key={index}/>
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
export default Row;
