import React, { Component } from 'react';

class SortOrderSelector extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section top-section">
          <div className="is-pulled-right ">
            <div className="field is-horizontal">
              <div className="field-label is-normal ">
                <label className="label">Sort&nbsp;by</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={this.props.sortBy}
                        onChange={this.props.onChange}
                      >
                        <option value="byPriceAscending">
                          Lowest price first
                        </option>
                        <option value="byPriceDescending">
                          Highest price first
                        </option>
                        <option value="byLengthDescending">
                          Longest tour first
                        </option>
                        <option value="byLengthAscending">
                          Shortest tour first
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="is-clearfix" />
      </React.Fragment>
    );
  }
}

export default SortOrderSelector;
