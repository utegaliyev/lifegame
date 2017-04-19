import React, {PropTypes} from 'react';
import './style.css';

const Cell = ({cell}) => {
  let classList = ['cell'];
  if(cell.alive){
    classList.push('alive');
  }
  return (

      <div className={classList.join(' ')}>

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
