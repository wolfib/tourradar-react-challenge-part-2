import React from 'react';

const ResultCardPriceColumn = props => {
  const { currency, price, saving, length } = props;
  const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£'
  };
  const currencySymbol = currencySymbols[currency] || currency;
  return (
    <div className="column is-3 no-top-padding">
      <div className="columns is-hidden-tablet has-text-centered">
        <div className="column no-bottom-padding">
          <p>Our saving</p>
        </div>
        <div className="column result-card-price no-top-padding">
          <p>{`${currencySymbol} ${saving}`}</p>
        </div>
        <div className="column no-bottom-padding">
          <p>From</p>
        </div>
        <div className="column result-card-price">
          <p className="has-text-weight-bold">{`${currencySymbol} ${price}`}</p>
        </div>
      </div>
      <div className="columns is-marginless is-hidden-mobile">
        <div className="column no-bottom-padding">
          <p>Our saving</p>
        </div>
        <div className="column has-text-right no-bottom-padding">
          <p>From</p>
          <p className="has-text-weight-bold" />
        </div>
      </div>
      <div className="columns is-marginless is-hidden-mobile">
        <div className="column is-size-5 result-card-price">
          <p>{`${currencySymbol} ${saving}`}</p>
        </div>
        <div className="column has-text-right is-size-5 result-card-price">
          <p className="has-text-weight-bold">{`${currencySymbol} ${price}`}</p>
        </div>
      </div>
      <hr className="is-marginless" />
      <p className="has-text-centered has-text-weight-bold padding-7 is-size-5 ">
        {length} days
      </p>
      <hr className="is-marginless" />
    </div>
  );
};

export default ResultCardPriceColumn;
