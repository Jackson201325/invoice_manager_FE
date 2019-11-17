import React from 'react';
import NumberFormat from 'react-number-format';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const ItemNumbers = props => {
  return (
    <div className="data--display">
      <ArrowDownwardIcon className="icon--display" />
      <NumberFormat
        value={props.item[props.argument]}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default ItemNumbers;
