import * as React from 'react';

export interface IProps {
  pair: string[],
  tally: {
    [key: string]: number
  },
  next: () => void
}

const Results: React.SFC<IProps> = (props: IProps) => {
  return (
    <div>
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
    </div>
  );
};

export default Results;