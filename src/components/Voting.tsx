import * as React from 'react';
import Vote from './Vote';
import Winner from './Winner';

interface IProps {
  winner: string;
  hasVoted: string;
  pair: string[];
  vote: () => void;
}

class Voting extends React.Component<IProps> {
  public render() {
    return (
      <div>
      {this.props.winner
        ? <Winner winner={this.props.winner} />
        : <Vote {...this.props} />}
    </div>
    );
  }
}

export default Voting;