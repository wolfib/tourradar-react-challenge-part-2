import React, { Component } from 'react';
import ResultCardImageColumn from './ResultCardImageColumn';
import ResultCardDetailsColumn from './ResultCardDetailsColumn';
import ResultCardPriceColumn from './ResultCardPriceColumn';

class ResultCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="section has-background-white is-paddingless">
        <div className="columns is-marginless">
          <ResultCardImageColumn
            tourImage={data.tour_image}
            mapImage={data.map_image}
            id={data.id}
          />
          <ResultCardDetailsColumn data={data} />
          <ResultCardPriceColumn
            currency={data.currency}
            price={data.price}
            saving={data.saving}
            length={data.length}
          />
        </div>
      </div>
    );
  }
}

export default ResultCard;
