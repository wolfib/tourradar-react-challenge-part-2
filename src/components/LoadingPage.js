import React from 'react';

const LoadingPage = props => {
  return (
    <section className="hero has-background-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered flex-center">
          <div className="has-text-centered">
            <div className="spinner" />
            <h2 className="subtitle">Loading</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
