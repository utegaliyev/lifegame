import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

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
