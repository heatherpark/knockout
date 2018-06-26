import * as React from 'react';

import Winner from './Winner';

export interface IProps {
  pair: string[],
  tally: {
    [key: string]: number
  },
  next: () => void,
  winner?: string
}

const Results: React.SFC<IProps> = (props: IProps) => {
  function renderResults() {
    return (
      <React.Fragment>
        <div className="results">
          {props.pair.map(entry =>
            <div
              key={entry}
              className="entry">
              <h1>{entry}</h1>
              <div className="vote-count">
                {props.tally[entry] ? props.tally[entry] : 0}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button
            className="next"
            onClick={props.next}>
            Next
        </button>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div>
      {props.winner 
        ? <Winner winner={props.winner} /> 
        : renderResults()}
    </div>
  );
};

export default Results;