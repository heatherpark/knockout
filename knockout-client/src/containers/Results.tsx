import * as React from 'react';
import { connect } from 'react-redux';

import Winner from '../components/Winner';
import * as actions from '../store/actions';

export interface IProps {
  pair: string[],
  tally: {
    [key: string]: number
  },
  next: () => void,
  winner?: string
}

export class Results extends React.Component<IProps> {
  public render() {
    return (
      <div>
        {this.props.winner
          ? <Winner winner={this.props.winner} />
          : this.renderResults()}
      </div>
    );
  }

  private renderResults() {
    return (
      <React.Fragment>
        <div className="results">
          {this.props.pair && this.props.pair.map(entry =>
            <div
              key={entry}
              className="entry">
              <h1>{entry}</h1>
              <div className="vote-count">
                {this.props.tally && this.props.tally[entry]
                  ? this.props.tally[entry]
                  : 0}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button
            className="next"
            onClick={this.props.next}>
            Next
          </button>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  pair: state.vote && state.vote.pair,
  tally: state.vote && state.vote.tally,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(actions.next())
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);