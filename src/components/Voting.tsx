import * as React from 'react';

export interface IProps {
  pair: string[];
  vote: (entry: string) => void;
}

const Voting: React.SFC<IProps> = (props: IProps) => {

  return (
    <div className="voting">
      {props.pair.map(entry =>
        <button 
          key={entry}
          onClick={() => props.vote(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  );
};

export default Voting;