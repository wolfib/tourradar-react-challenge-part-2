import React from 'react';
import ResultCardDetailItem from './ResultCardDetailItem';

const ResultCardDetailsColumn = props => {
  const { data } = props;
  const startsIn = data.destinations[0];
  const endsIn = data.destinations[data.destinations.length - 1];

  // If the tour has only 1-2 destinations, list them.
  // Otherwise list the first 2, and the complete list
  // is in a tooltip which opens on hover.
  // This behavior could alternatively be handled
  // in a separate component as well.
  let destinationsSpan;
  if (data.destinations.length === 1) {
    destinationsSpan = <span>{data.destinations[0]}</span>;
  } else if (data.destinations.length === 2) {
    destinationsSpan = (
      <span>
        {data.destinations[0]}, {data.destinations[1]}
      </span>
    );
  } else {
    const tooltip = (
      <span
        className="tooltip is-tooltip-multiline has-text-link is-underlined"
        data-tooltip={data.destinations.join(', ')}
      >
        + {data.destinations.length - 2} more
      </span>
    );
    destinationsSpan = (
      <span>
        {data.destinations[0]}, {data.destinations[1]} {tooltip}
      </span>
    );
  }

  return (
    <div className="column is-6">
      <h1 className="title">{data.tour_name}</h1>
      <h2 className="subtitle ">{data.description}</h2>
      <ResultCardDetailItem label="Destinations" value={destinationsSpan} />
      <ResultCardDetailItem
        label="Starts/Ends in"
        value={`${startsIn} / ${endsIn}`}
      />
      <ResultCardDetailItem
        label="Age range"
        value={`${data.age_from} to ${data.age_to} year olds`}
      />
      <ResultCardDetailItem label="Country" value={data.country} />
      <ResultCardDetailItem label="Operator" value={data.tour_operator} />
    </div>
  );
};

export default ResultCardDetailsColumn;
