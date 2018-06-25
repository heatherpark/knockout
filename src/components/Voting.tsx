import * as React from 'react';
import Winner from './Winner';
import Vote from './Vote';

interface IProps {
  winner: string;
  hasVoted: string;
  pair: string[];
  vote: () => void;
}

class Voting extends React.Component<IProps> {
  render() {
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