import React from 'react';
import Cell from '../Cell/Cell';
import './style.css';
import PropTypes from 'prop-types';

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
