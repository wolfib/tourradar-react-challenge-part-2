import React from 'react';

const ResultCardDetailItem = props => {
  return (
    <div className="columns">
      <div className="column is-5 no-top-padding no-bottom-padding">
        <p className="is-uppercase has-text-grey">{props.label}</p>
      </div>
      <div className="column no-top-padding no-bottom-padding">
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default ResultCardDetailItem;
