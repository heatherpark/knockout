import * as React from 'react';

interface IProps {
  pair: string[];
}

const Voting: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="voting">
      {props.pair.map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  );
};

export default Voting;