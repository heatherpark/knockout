import * as React from 'react';

interface IWinnerProps {
  winner: string;
};

const Winner: React.SFC<IWinnerProps> = (props: IWinnerProps) => {
  return (
    <div className="winner">
      The winner is {props.winner}!
    </div>
  );
};

export default Winner;