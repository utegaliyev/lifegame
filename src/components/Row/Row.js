import React from 'react';
import Cell from '../../containers/Cell';
import './style.css';
import PropTypes from 'prop-types';

const Row = ({cells, row}) => {

  return (
      <div className="row">
        {cells.map((cell, index) =>
          <Cell cell={cell} key={index} row={row} col={index}/>
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
