import * as React from 'react';

interface IProps {
  pair: string[],
  tally: {
    [key: string]: string
  }
}

const Results: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="results">
      {props.pair.map(entry => 
        <div
          key={entry}
          className="entry">
          <h1>{entry}</h1>
          <div className="voteCount">
            {props.tally[entry] ? props.tally[entry] : 0}
          </div>
        </div>)}
    </div>
  );
};

export default Results;