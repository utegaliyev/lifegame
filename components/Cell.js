import React, {PropTypes} from 'react';

const Cell = ({cell}) => {

  return (
      <div className="cell">
          {cell}
      </div>
  );
};

/*
Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({

  }));
};
*/
export default Cell;
