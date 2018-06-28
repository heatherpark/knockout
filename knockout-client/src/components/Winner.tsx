import * as React from 'react';

interface IProps {
  winner: string;
};

const Winner: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="winner">
      The winner is {props.winner}!
    </div>
  );
};

export default Winner;