import React from 'react';
import LazyLoad from 'react-lazyload';

const ResultCardImageColumn = props => {
  const { tourImage, mapImage, id } = props;
  return (
    <div className="column is-3 is-paddingless image-column">
      <LazyLoad key={`${id}_img`} height="100%" offset={100} resize={true}>
        <img src={tourImage} alt="Tour" className="top-image" />
      </LazyLoad>
      <LazyLoad key={`${id}_map`} height="100%" offset={100} resize={true}>
        <img src={mapImage} alt="Map" />
      </LazyLoad>
    </div>
  );
};

export default ResultCardImageColumn;
