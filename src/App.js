import React, { Component } from 'react';
import { forceCheck } from 'react-lazyload';
import './App.scss';
import SortOrderSelector from './components/SortOrderSelector';
import ResultCard from './components/ResultCard';
import LoadingPage from './components/LoadingPage';

const compareFunctions = {
  byPriceAscending: (a, b) => a.price - b.price,
  byPriceDescending: (a, b) => b.price - a.price,
  byLengthAscending: (a, b) => a.length - b.length,
  byLengthDescending: (a, b) => b.length - a.length
};

class App extends Component {
  state = { isLoading: true, sortBy: 'byPriceAscending' };

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = () => {
    forceCheck();
  };

  getData = async () => {
    const response = await fetch('https://api.myjson.com/bins/18x6yt');
    const searchResults = await response.json();
    searchResults.sort(compareFunctions[this.state.sortBy]);
    this.setState({ searchResults, isLoading: false });
  };

  changeSortOrder = event => {
    const sortBy = event.target.value;
    const compare =
      compareFunctions[sortBy] || compareFunctions['byPriceAscending'];
    this.setState(prevState => {
      return {
        sortBy,
        searchResults: prevState.searchResults.sort(compare)
      };
    });
  };

  render() {
    const { isLoading, sortBy, searchResults } = this.state;

    if (isLoading) {
      return <LoadingPage />;
    }

    return (
      <div className="container">
        <SortOrderSelector sortBy={sortBy} onChange={this.changeSortOrder} />
        {searchResults.map(data => {
          return <ResultCard key={data.id} data={data} />;
        })}
      </div>
    );
  }
}

export default App;
